import { createStore } from 'redux';
import ecommerceApp from '../reducers';

const store =  createStore(ecommerceApp);

export default store;