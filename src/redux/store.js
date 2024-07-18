import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const favoritesPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(favoritesPersistConfig, campersReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
