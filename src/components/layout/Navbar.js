import React from 'react';
import styled from 'styled-components';
import { colors, NAVBAR_HEIGHT } from '../../constants';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${NAVBAR_HEIGHT};
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.black};
`;

const Navbar = () => {
    return (
        <StyledWrapper className="px-4">
            <p>salam</p>
            <p>salam</p>
        </StyledWrapper>
    );
};

export default Navbar;
