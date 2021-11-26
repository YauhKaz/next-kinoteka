import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import notFound from '../public/image-not-found.png'

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

const Film = ({film}) => {
  const {title, createAt, images, categories} = film;
  const image = images.length > 0 ? images[0].url : notFound;
  const category = categories.length > 0 ? categories[0].title : 'Hot!';
  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  }
  const dateCreate = new Date(createAt);        
  return (
    <Ssection>
      <Image
          loader={myLoader}
          src={image}
          alt="Search image will start to search movies"
          width={210}
          height={295}/>
      <Sdiv>    
        <h2>{title}</h2>    
        <Sflexrow>
          <Sli>Cost</Sli>
          <Sli>{category}</Sli>
          <Sli>{`${dateCreate.getFullYear()}`}</Sli>
        </Sflexrow>
      </Sdiv>
    </Ssection>
  )
}

export default Film;