import React from 'react';

import { Wrapper, Image, Title, Description, TextWrapper } from './StyledComponents';

const UserTemplate = ({ animatedStyle }) =>  (
  <Wrapper>
    <Image style={animatedStyle} />
    <TextWrapper>
      <Title style={animatedStyle} />
      <Description style={animatedStyle} />
    </TextWrapper>
  </Wrapper>
);

export { UserTemplate };
