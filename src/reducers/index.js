import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer/fuelSavingsReducer';

const rootReducer = combineReducers({
  fuelSavings
});

export default rootReducer;
