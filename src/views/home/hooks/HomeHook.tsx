import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '@src/types/globalTypes';
import {useEffect, useLayoutEffect} from 'react';
import BannerHook from '../../../components/banner/hooks/BannerHook';
import AlertHook from '../../../components/customAlert/hooks/AlertHook';
import {GetTodos} from '../../../query/GlobalQuery';
import {HeaderShown} from '@src/navigator/HeaderShown';
import {useWindowDimensions} from 'react-native';
import {ActualTheme} from '@src/navigator/hook/GlobalTheme';

const HomeHook = () => {
  const navigation = useNavigation<StackNavigation>();
  const {width} = useWindowDimensions();
  const {colors} = ActualTheme();
  const {data} = GetTodos(); //Query example
  const user = false; //G et user to validate session

  //Work with custom banner and custom alert
  const continueBanner = () => {
    console.log('continue Banner');
  };
  const continueAlert = () => {
    console.log('continue Alert');
  };
  const {bannerVisible, setBannerVisible, handleBannerSuccessAction} =
    BannerHook({actionSuccess: continueBanner});
  const {alertVisible, setAlertVisible, handleAlertSuccessAction} = AlertHook({
    actionSuccess: continueAlert,
  });
  // ---------

  useLayoutEffect(() => {
    !user && navigation.navigate('Login');
  }, [navigation, user]);

  useEffect(() => {
    HeaderShown({
      navigation,
      width: width,
      visible: true,
      transparent: true,
      titleColor: colors.onPrimaryContainer,
    });
  }, [colors.onPrimaryContainer, navigation, width]);

  return {
    data,
    bannerVisible,
    setBannerVisible,
    handleBannerSuccessAction,
    alertVisible,
    setAlertVisible,
    handleAlertSuccessAction,
  };
};

export default HomeHook;
