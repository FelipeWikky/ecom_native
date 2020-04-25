import { AsyncStorage } from 'react-native';

import Constants from '../utils/Constants';

import api from '../services/api';

class Authentication {

  private async getToken() {
    const token = await AsyncStorage.getItem(Constants.TOKEN_STORAGE);
    if (token) {
      return token;
    }

    return false;
  }

  private async setToken(token: string) {
    if (token && token !== '') {
      await AsyncStorage.setItem(Constants.TOKEN_STORAGE, token);
      return true;
    }

    return false;
  }

  public async isLogged() {
    const token = await this.getToken();
    if ( token ) {
      return true;
    }
    return false;
  }

  public async signIn(login: string, password: string) {
    try {
      if (login && password) {
        const response = await api.post('/user/login', { login, password });

        const token:string = response.data?.token;
        await this.setToken( token );
      }
    } catch (error){
      console.log(error);
    }
  }

  public async signOut() {
    if (this.isLogged()) {
      await AsyncStorage.removeItem(Constants.TOKEN_STORAGE);
      return !(await this.getToken());
    }
    return false;
  }
}

export default new Authentication();