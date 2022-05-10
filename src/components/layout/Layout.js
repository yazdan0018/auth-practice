import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { colors, NAVBAR_HEIGHT } from '../../constants';

const LayoutWrapper = styled.div`
  background-color: ${colors.white};
  width: 100vw;
  min-height: calc(100vh - ${NAVBAR_HEIGHT});
  max-height: calc(100vh - ${NAVBAR_HEIGHT});
  height: calc(100vh - ${NAVBAR_HEIGHT});
  position: fixed;
  top: ${NAVBAR_HEIGHT};
  overflow: auto;
`;

const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <LayoutWrapper>
                {children}
            </LayoutWrapper>
        </>
    );
};

export default Layout;