import * as React from 'react';
import Navigator from '../components/Navigator';
import styled from 'styled-components';
import Link from 'next/link';
import SignButton from '../components/SignButton';
import Logo from '../components/Logo';
import SearchPanel from '../components/SearchPanel';

const Ssection = styled.section`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Sli = styled.li`
  list-style-type: none;
  transition: color 1s;
  &:hover {
    transition: color 1s;
    color: #10B5B2;
  };
`;

const Header = () => {
  return (
    <Ssection>
      <Logo />
      <Navigator>
        <Sli><Link href='/'>Main</Link></Sli>
        <Sli><Link href='/auth'>Categories</Link></Sli>
        <Sli><Link href='/movie'>About</Link></Sli>
      </Navigator>
      <SearchPanel/>
      <SignButton title='Sign In'/>
    </Ssection>
  )
}

export default Header;
