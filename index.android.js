import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Rotas from './src/Routes';

export default class caraoucoroa extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('caraoucoroa', () => caraoucoroa);
