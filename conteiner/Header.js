import * as React from 'react';
import Navigator from '../components/Navigator';
import styled from 'styled-components';
import Link from 'next/link';
import SignButton from '../components/SignButton';
import Logo from '../components/Logo';

const Ssection = styled.section`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Header = () => {
  return (
    <Ssection>
      <Logo />
      <Navigator>
        <li><Link href='/'>Main</Link></li>
        <li><Link href='/auth'>Categories</Link></li>
        <li><Link href='/movie'>About</Link></li>
      </Navigator>
      <SignButton title='Sign In'/>
    </Ssection>
  )
}

export default Header;
