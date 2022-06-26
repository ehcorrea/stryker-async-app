import React, {useEffect, useState} from 'react';

import {Wrapper, Text} from './styles';

const Subtitle = () => {
  const [width, setWidth] = useState(10);

  useEffect(() => {
    setTimeout(() => setWidth(15), 450);
  }, []);

  return (
    <Wrapper testID="subtitle-component" style={{width: width}}>
      <Text>A Subtitle</Text>
    </Wrapper>
  );
};

export default Subtitle;
