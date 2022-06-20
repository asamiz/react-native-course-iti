import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storingMovieReducer } from "./reducers";

const config = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(config, storingMovieReducer);
const store = createStore(persistedReducer, {});

const persistor = persistStore(store);

export { store, persistor };
