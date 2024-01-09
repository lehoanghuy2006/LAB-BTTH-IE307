// src/pages/index.js
import { CurrentUserProvider, CurrentUserContext} from "@context/userContext.js";
import { NavigationContainer } from "@react-navigation/native";
import {useState, useContext} from 'react'
import { MainScreen } from "./mainscreen.js";
import { Auth } from "./Auth.js";
import {store} from '@utils/store.js';
import  {Provider} from 'react-redux';

export default function Index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <CurrentUserProvider>
        <CurrentUserContext.Consumer>
          {
            ([currentUser, setCurrentUser]) => {
                return currentUser ? <MainScreen /> : <Auth />
            }
          }
        </CurrentUserContext.Consumer>
        </CurrentUserProvider>
      </Provider>
    </NavigationContainer>
  );
}
