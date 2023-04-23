import React, { useEffect, useState } from 'react';
import { Platform, Text, ScrollView } from 'react-native';
import { useAnimatedStyle, interpolateColor, useSharedValue, withTiming } from 'react-native-reanimated';
import { LightSensor } from 'expo-sensors';
import * as Brightness from 'expo-brightness';

import { UserTemplate } from '../UserTemplate/UserTemplate';

const isIOS = Platform.OS === 'ios';
const inputRange = isIOS ? [0, 0.5, 1] : [0, 200, 600];

const AnimatedList = () => {
  const [displayValue, setDisplayValue] = useState(0);
  const colorChange = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorChange.value,
      inputRange,
      ["rgb(52,245,129)", "rgb(90,210,244)", "rgb(224,82,99)"]
    );
    return {
      backgroundColor,
    };
  });

  const setValue = (e) => {
    const value =  isIOS ? e.brightness : e.illuminance;
    colorChange.value = withTiming(value, { duration: isIOS ? 300 : 1000 });
    setDisplayValue(value);
  };

  useEffect(() => {
    const subscription = isIOS ? Brightness.addBrightnessListener(setValue) : LightSensor.addListener(setValue);

    return () => {
      subscription && subscription.remove();
    };
  }, []);

  return (
    <>
      <Text style={{ fontSize: 20, margin: 20 }}>
        {isIOS ? displayValue * 100 : displayValue} {isIOS ? '%' : 'lux'}
      </Text>
      <UserTemplate animatedStyle={animatedStyle} />
      <UserTemplate animatedStyle={animatedStyle} />
      <UserTemplate animatedStyle={animatedStyle} />
      <UserTemplate animatedStyle={animatedStyle} />
    </>
  );
};

export { AnimatedList };
