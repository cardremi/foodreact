
//setter && getter to saga or reducer 
export const getDataList = payload => {
  return {
    type: 'CURRENT_DATA',
    payload,
  };
};
export const setListData = payload => {
  return {
    type: 'SET_LIST_DATA',
    payload,
  };
};
export const setLoading = payload => {
  return {
    type: 'SET_LOADING',
    payload,
  };
};
