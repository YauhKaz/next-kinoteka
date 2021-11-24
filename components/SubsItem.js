import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Ssection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  border-radius: 16px;
  transform: scale(1);
  transition: transform 1s;
  &:hover{
    transform: scale(1.05);
    transition: transform 1s;
  }
`;

const Sdiv = styled.div`
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

const SubsItem = (props) => {
  
  return (
    <Ssection>
      <Image
          src={props.url}
          alt="Search image will start to search movies"
          width={210}
          height={295}/>
      <Sdiv>    
        <h2>{props.title}</h2>    
        <Sflexrow>
          <Sli>Cost</Sli>
          <Sli>Category</Sli>
          <Sli>Date</Sli>
        </Sflexrow>
      </Sdiv>
    </Ssection>
  )
}

export default SubsItem;