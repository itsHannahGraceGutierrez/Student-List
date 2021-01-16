import React, { Component, useEffect } from 'react';

import AppScreen from './src/components/AppScreen';

import * as SQLite from 'expo-sqlite';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 'home',
      previousScreen: 'home',
    };

    this.goTo = this.goTo.bind(this);
    this.goBack = this.goBack.bind(this);
    this.getMethods = this.getMethods.bind(this);
  }

  goTo(name, callback=() => console.log('Screen changed.')) {
    this.setState((state)=> {
      const { currentScreen } = state;

      return {
        currentScreen: name,
        previousScreen: currentScreen,
      }
    }, callback);
  }

  goBack() {
    this.setState((state) => {
      const { previousScreen } = state;

      return {
        currentScreen: previousScreen,
        previousScreen: 'home',
      }
    })
  }

  getMethods() {
    const { 
      goTo, 
      goBack,
   
    } = this;

    return {
      goTo,
      goBack,
    };
  }

  render() {
    return (
      <AppScreen 
        state={this.state}
        methods={this.getMethods()}
      />
    );
  }
}
