import {combineReducers} from 'redux';
import {dataReducer} from '../Components/Reducer'

//setting for combining multiple reducer if necessary
export const AllReducer = combineReducers({
    dataReducer
});
