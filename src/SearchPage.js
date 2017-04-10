import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const SearchPage = () => {
  return <View style={styles.container}><Text>SearchPage</Text></View>;
};

export default SearchPage;
