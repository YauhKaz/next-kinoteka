import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const SectionLayout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const Ssection = styled.section`
  
  border-radius: 16px;
  &:hover {
    img {
      transform: scale(1.05);
      filter: blur(3px);
      transition: all 1s;
    }
    svg {
      display: block;
      transition: opacity 1s;
      opacity: 1;
    }
    h2 {
      transition: color 1s;
      color: #10B5B2;
    }
  }
  & img {
    border-radius: 12px;
    transform: scale(1);
    filter: blur(0px);
    transition: all 1s;
    cursor: pointer;
  };
  svg {
    opacity: 0;
    transition: all 1s;
    position: absolute;
    left: 42%;
    top: 34%;
    border-radius: 50px;
    cursor: pointer;
  }
`;

const Sdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  font-size: 12px;
  & h2{
    width: 210px;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 1s;
    &:hover {
      transition: color 1s;
      color: #10B5B2;
    }
  }
`;

const Sp = styled.p`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

const SubsItem = (props) => {
  
  return (
    <SectionLayout>
      <Ssection>
        <Link href="/">
          <Image
            src={props.url}
            alt="Search image will start to search movies"
            width={210}
            height={295}/>
        </Link>
        <Sdiv>    
          <h2>
            <Link href="/">
              {props.title}
            </Link>
          </h2>    
          <Sp>More than 300 movies</Sp>
        </Sdiv>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="60" height="60" viewBox="0 0 24 24">
            <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 
            9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 
            0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"/>
          </svg>
        </Link>
      </Ssection>
    </SectionLayout>
  )
}

export default SubsItem;