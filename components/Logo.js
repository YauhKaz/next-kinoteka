import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../public/logo-icon.svg';
import styled from 'styled-components';

const Sdiv = styled.div`
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Sdiv>
      <Link href='/'>
        <Image 
          src={logoImage} 
          alt="Logo image will redirect to home page"
          width={35}
          height={35}/>
      </Link>
    </Sdiv>
  )
}

export default Logo;
