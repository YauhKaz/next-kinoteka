import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import signInImage from '../public/login-icon.svg';

const Sbutton = styled.button`
  width: 10%; 
  height: 2em;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  background-color: inherit;
  color: white;
  transition: color 1s;
  &:hover {
    color: #10B5B2;
    transition: color 1s;
  }
`;

const SignButton = (props) => {
  const {title} = props;
  return (
    <Link href="/auth">
      <Sbutton>
        <span>{title}</span>
        <Image
          src={signInImage} 
          alt="SignIn image will redirect to autorisation page"
          width={15}
          height={15}/>
      </Sbutton>
    </Link>
  );  
}

export default SignButton;
