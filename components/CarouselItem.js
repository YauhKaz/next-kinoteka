import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import favicon from '../public/favicon.png'

const Ssection = styled.section`
  width: 20%;
  height: 350px;
  position: relative;
  margin-right: 5%;
  border-radius: 16px;
  transform: scale(1);
  transition: transform 1s;
  &:hover{
    transform: scale(1.1);
    transition: transform 1s;
  }
`;

const Sdiv = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  display: flex;
  flex-direction: column;
`;

const Sflexrow = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

const Sli = styled.li`
  list-style-type: none;  
  margin-right: 5%;
`;

const CarouselItem = () => {
  return (
    <Ssection>
      <Sdiv>
        <Image
          src={favicon}
          alt="Search image will start to search movies"
          width={50}
          height={50}/>
        <h2>Title</h2>
        <Sflexrow>
          <Sli>Cost</Sli>
          <Sli>Category</Sli>
          <Sli>Date</Sli>
        </Sflexrow>
      </Sdiv>
    </Ssection>
  )
}

export default CarouselItem;