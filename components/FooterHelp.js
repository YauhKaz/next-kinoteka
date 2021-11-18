import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Ssection = styled.section`
  width: 20%;
  height: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

const Sul = styled.ul`
  width: 100%;
  height: 100px;
  padding 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Sli = styled.li`
  list-style-type: none;
  cursor: pointer;
  transition: color 1s;
  &:hover {
    transition: color 1s;
    color: #10B5B2;
  }
`; 

const FooterHelp = () => {
  return (
    <Ssection>
      <h3>Help</h3>
      <Sul>
        <Sli><Link href='/'>Account and Billing</Link></Sli>
        <Sli><Link href='/'>Plans and Pricing</Link></Sli>
        <Sli><Link href='/'>Supported devices</Link></Sli>
        <Sli><Link href='/'>Accessibility</Link></Sli>
      </Sul>
    </Ssection>
  )
}

export default FooterHelp;