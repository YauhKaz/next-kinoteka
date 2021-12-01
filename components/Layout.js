import * as React from 'react';
import styled from 'styled-components';

const SSection = styled.section`
  background-color: #171C26;
  color: white;
`;

const Layout = (props) => {
  return (
    <SSection>
      {props.children}
    </SSection>
  )
}

export default Layout;