import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';

const store = configureStore({
  reducer: rootReducer, // CORREÇÃO: precisa estar dentro de "reducer"
});

export default store;
