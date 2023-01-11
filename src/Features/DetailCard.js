import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import formatRupiah from '../Utils/MoneyFormat';

//detail card dari data list
function DetailCard(props) {
  //get passing params data from navigation
  const data = props.route.params.data;

  return (
    <SafeAreaView style={styles.cover}>
      <StatusBar animated={true} backgroundColor="#ff6347" barStyle={'white'} />
      <Image
        style={styles.coverImg}
        source={{
          uri: data.cover,
        }}
      />
      <View style={{width: '100%', paddingVertical: 10, paddingHorizontal: 20}}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={{textAlign: 'left', fontSize: 12}}>
          {data.name}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={{textAlign: 'left', fontSize: 16, fontWeight: 'bold'}}>
          {formatRupiah(data.price)}
        </Text>
      </View>
      <View style={{borderTopWidth: 1, borderTopColor: 'lightgrey'}}>
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 17,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Description
          </Text>
          <Text
            adjustsFontSizeToFit
            style={{
              textAlign: 'justify',
              fontSize: 16,
              color: 'black',
              fontWeight: 'normal',
            }}>
            {data.desc}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DetailCard;

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    backgroundColor: '#ECF0F1',
  },
  coverImg: {
    width: '100%',
    height: '30%',
  },
});
