import React, {useEffect, useCallback, useRef, useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getDataList, setLoading} from '../Components/Action';
import formatRupiah from '../Utils/MoneyFormat';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

function Main(props) {
  const navigation = useNavigation();
  const onRefresh = () => props.getDataList();
  const sheetRef = useRef(-1);
  const [hideMenu, setHideMenu] = useState(false);

  // variables bottomsheet
  const snapPoints = useMemo(() => ['10%', '100%'], []);

  // callbacks bottomsheet
  const handleSheetChange = useCallback(index => {
    switch (index) {
      case 1:
        setHideMenu(true);
        break;
      case 0:
        setHideMenu(false);
        handleClosePress();
        break;
      default:
        break;
    }
  }, []);

  // action swipe bottomsheet
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  // action for closing bottomsheet
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  //data array/list menu
  const listMenu = [
    {
      name: 'Live Show',
      icon: 'clipboard-play',
    },
    {
      name: 'Live Cast',
      icon: 'ethereum',
    },
    {
      name: 'Cart',
      icon: 'cart',
    },
    {
      name: 'Community',
      icon: 'comment-search-outline',
    },
  ];

  //data array/list menu for expanded view
  const listExpand = [
    {
      name: 'Live Show',
      icon: 'clipboard-play',
      color: 'red',
    },
    {
      name: 'Live Cast',
      icon: 'ethereum',
      color: 'red',
    },
    {
      name: 'Cart',
      icon: 'cart',
      color: 'red',
    },
    {
      name: 'Community',
      icon: 'comment-search-outline',
      color: 'red',
    },
    {
      name: 'Afiliasi',
      icon: 'google-podcast',
      color: 'lightblue',
    },
    {
      name: 'Chart',
      icon: 'file-chart',
      color: 'lightblue',
    },
    {
      name: 'Flash',
      icon: 'flash-outline',
      color: 'lightblue',
    },
    {
      name: 'Food',
      icon: 'food-drumstick-outline',
      color: 'lightblue',
    },
    {
      name: 'Game',
      icon: 'gamepad-square',
      color: 'green',
    },
    {
      name: 'Glass',
      icon: 'glass-pint-outline',
      color: 'green',
    },
    {
      name: 'Music',
      icon: 'guitar-electric',
      color: 'lightgrey',
    },
  ];

  //lifecycle for get data in first render
  useEffect(() => {
    props.getDataList();
  }, []);

  //render card in main page
  const cardFood = val => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail Product', {data: val.item})}
        activeOpacity={0.75}
        style={{
          alignItems: 'center',
          width: '40%',
          marginVertical: 20,
          marginHorizontal: 20,
          backgroundColor: 'white',
          borderRadius: 5,
        }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: val.item.cover,
          }}
        />
        <View
          style={{width: '100%', paddingVertical: 10, paddingHorizontal: 6}}>
          <Text style={{textAlign: 'left', fontSize: 12}}>{val.item.name}</Text>
          <Text style={{textAlign: 'left', fontSize: 16, fontWeight: 'bold'}}>
            {formatRupiah(val.item.price)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  //render card in menu navbar
  const cardMenu = (val, idx) => {
    return (
      <View key={idx.toString()} style={{alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.75}
          style={{
            alignItems: 'center',
            backgroundColor: 'red',
            borderRadius: 1000,
            padding: 10,
          }}>
          <Icon name={val.icon} size={25} color={'white'} />
        </TouchableOpacity>
        <View>
          <Text adjustsFontSizeToFit numberOfLines={1} style={{fontSize: 12}}>
            {val.name}
          </Text>
        </View>
      </View>
    );
  };

  //render card in menu navbar for expand view
  const cardExpanded = val => {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.75}
          style={{
            alignItems: 'center',
            backgroundColor: val.item.color,
            borderRadius: 1000,
            padding: 10,
          }}>
          <Icon name={val.item.icon} size={25} color={'white'} />
        </TouchableOpacity>
        <View>
          <Text adjustsFontSizeToFit numberOfLines={1} style={{fontSize: 12}}>
            {val.item.name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.cover}>
      <StatusBar animated={true} backgroundColor="#ff6347" barStyle={'white'} />
      {/* mapping list/array with component flatlist from reducer */}
      <FlatList
        onRefresh={onRefresh}
        refreshing={props.isLoading}
        data={props.ListData}
        renderItem={cardFood}
        keyExtractor={(_, idx) => idx.toString()}
        numColumns={2}
        style={styles.flatList}
      />
      {hideMenu !== true && (
        <View style={styles.menuBottomBar}>
          <TouchableOpacity
            onPress={() => handleSnapPress(1)}
            style={{alignSelf: 'center'}}>
            <View
              style={{
                width: 40,
                height: 7,
                borderRadius: 50,
                backgroundColor: 'red',
                marginVertical: 8,
                elevation: 3,
              }}
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            {listMenu.map((val, idx) => cardMenu(val, idx))}
          </View>
        </View>
      )}
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}>
        <BottomSheetFlatList
          data={listExpand}
          keyExtractor={(_, idx) => idx.toString()}
          ItemSeparatorComponent={() => <View style={{padding: 10}} />}
          renderItem={cardExpanded}
          numColumns={4}
        />
      </BottomSheet>
    </SafeAreaView>
  );
}

//data from current reducer
const mapStateToProps = state => ({
  ListData: state.dataReducer.ListData,
  isLoading: state.dataReducer.isLoading,
});

//action for saga
const mapDispatchToProps = {
  getDataList,
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

//style object jsx
const styles = StyleSheet.create({
  cover: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  flatList: {
    flex: 1,
  },
  tinyLogo: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  menuBottomBar: {
    position: 'absolute',
    alignSelf: 'center',
    width: '80%',
    bottom: 30,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 50,
    paddingBottom: 14,
    paddingHorizontal: 20,
  },
});
