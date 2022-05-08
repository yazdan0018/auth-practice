import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const StyledWrapper = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  background-color: ${colors.white};
  overflow: hidden;
`;

const AppContainer = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    );
};

export default AppContainer;
