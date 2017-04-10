import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { enhance } from "react-navigation-addons";

import HomePage from './HomePage'
import SearchPage from './SearchPage'

const HomeNavigation = StackNavigator(
  {
    home: {
      key: 'home',
      screen: HomePage
    },
    search: {
      key: 'search',
      screen: SearchPage
    }
  },
  {
    initialRouteName: "home",
  }
);

const SearchNavigation = StackNavigator(
  {
    home: {
      key: 'home',
      screen: HomePage
    },
    search: {
      key: 'search',
      screen: SearchPage
    }
  },
  {
    initialRouteName: "search",
  }
);


const Tabs = enhance(TabNavigator)(
  {
    home: {
      screen: HomeNavigation
    },
    search: {
      screen: SearchNavigation
    }
  },
  {
    tabBarPosition: "bottom",
  }
);

export default Tabs;
