import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useAnimatedStyle, interpolateColor, useSharedValue, withTiming } from 'react-native-reanimated';
import { LightSensor } from 'expo-sensors';

import { UserTemplate } from '../UserTemplate/UserTemplate';

const AnimatedList = () => {
  const [illuminance, setIlluminance] = useState(0);
  const colorChange = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorChange.value,
      [0, 200, 600],
      ["rgb(52,245,129)", "rgb(90,210,244)", "rgb(224,82,99)"]
    );
    return {
      backgroundColor,
    };
  });

  const setValue = (e) => {
    colorChange.value = withTiming(e.illuminance);
    setIlluminance(e.illuminance);
  }

  useEffect(() => {
    const subscription = LightSensor.addListener(setValue);

    return () => {
      subscription && subscription.remove();
    };
  }, []);

  return (
    <>
      <Text style={{ fontSize: 20, margin: 20 }}>{illuminance} lux</Text>
      <UserTemplate animatedStyle={animatedStyle} />
      <UserTemplate animatedStyle={animatedStyle} />
      <UserTemplate animatedStyle={animatedStyle} />
      <UserTemplate animatedStyle={animatedStyle} />
      <UserTemplate animatedStyle={animatedStyle} />
    </>
  );
};

export { AnimatedList };
