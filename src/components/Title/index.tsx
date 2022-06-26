import React, {useEffect, useRef} from 'react';

import {Animated} from 'react-native';

import {Wrapper, Text} from './styles';

const Title = () => {
  const animatedValue = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 15,
      duration: 450,
      useNativeDriver: false,
    }).start();
  }, [animatedValue]);

  return (
    <Wrapper testID="title-component" style={{width: animatedValue}}>
      <Text>A Title</Text>
    </Wrapper>
  );
};

export default Title;
