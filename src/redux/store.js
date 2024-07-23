import { configureStore } from "@reduxjs/toolkit";

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
import { modalReducer } from "./modal/slice";
import { campersReducer } from "./campers/campersSlice";

const favoritesPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["campersFavorites"],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(favoritesPersistConfig, campersReducer),
    modal: modalReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
