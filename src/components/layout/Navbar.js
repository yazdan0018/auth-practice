import React from 'react';
import styled from 'styled-components';
import { colors, NAVBAR_HEIGHT } from '../../constants';
import { useSelector } from "react-redux";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${NAVBAR_HEIGHT};
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${colors.black};
`;

const Navbar = () => {

    const token = useSelector(state => state.token.token);

    return (
        <StyledWrapper className="px-4">
            {token ? <p>Welcome user !</p> : <p>Please Log in</p>}
        </StyledWrapper>
    );
};

export default Navbar;
