import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { filterReducer } from './filter/slice';
// import { contactReducer } from './contacts/slice';
// import { authReducer } from './auth/slice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// const authPersistConfig = {
//   key: 'auth',
// //   storage,
// //   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);