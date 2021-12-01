import * as React from 'react';
import styled from 'styled-components';

const Sul = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Navigator = (props) => {
  return (
    <Sul>
      {props.children}
    </Sul>
  )
}

export default Navigator;
