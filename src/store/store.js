import {createStore } from 'redux';


import rootReducer from './root.reduces'

const store = createStore(rootReducer)

export default store