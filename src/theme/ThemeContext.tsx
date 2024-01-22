import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {customDarkTheme, customLightTheme} from '@src/globals/constants/theme';
import {ThemeContext, ThemeContextMode} from '@src/types/contextTypes';
import {SetStateAction, useCallback, useEffect, useState} from 'react';
import CustomTheme from '@src/globals/constants/CustomTheme';

const ThemeProvider = ({children}: any) => {
  const {customDefaultTheme} = CustomTheme();
  const [currentCustomTheme, setCurrentCustomTheme] =
    useState<ThemeContextMode>();

  const setDarkTheme = useCallback(async () => {
    await AsyncStorage.setItem('@theme', 'dark');
    setCurrentCustomTheme(customDarkTheme);
  }, []);

  const setLightTheme = useCallback(async () => {
    await AsyncStorage.setItem('@theme', 'light');
    setCurrentCustomTheme(customLightTheme);
  }, []);

  const getCurrentTheme = useCallback(
    async (
      customDefaultThemeSet: SetStateAction<ThemeContextMode | undefined>,
    ) => {
      const myCurrentTheme = await AsyncStorage.getItem('@theme');
      if (myCurrentTheme) {
        myCurrentTheme === 'dark' ? setDarkTheme() : setLightTheme();
      } else {
        setCurrentCustomTheme(customDefaultThemeSet);
      }
    },
    [setDarkTheme, setLightTheme],
  );

  useEffect(() => {
    !currentCustomTheme && getCurrentTheme(customDefaultTheme);
  }, [currentCustomTheme, customDefaultTheme, getCurrentTheme]);

  return (
    currentCustomTheme && (
      <ThemeContext.Provider
        value={{customTheme: currentCustomTheme, setDarkTheme, setLightTheme}}>
        {children}
      </ThemeContext.Provider>
    )
  );
};
export default ThemeProvider;
