import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import HomeHook from './hooks/HomeHook';

const Home = () => {
  const {} = HomeHook();

  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
