import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import favicon from '../public/favicon.png'
import notFound from '../public/image-not-found.png'

const Ssection = styled.section`
  margin: 0 15px;
  width: 100%;
  height: 350px;
  position: relative;
  margin-right: 5%;
  border-radius: 16px;
  transform: scale(1);
  transition: transform 1s;
  & span {
    margin-left: 10px;
    min-width: 90%;
  }
  & img {
    width: 100%;
    border-radius: 12px;
    transform: scale(1);
    filter: blur(0px);
    transition: all 1s;
    cursor: pointer;
  };
  &:hover {
    img {
      transform: scale(1.05);
      filter: blur(3px);
      transition: all 1s;
    }
    h2 {
      transition: color 1s;
      color: #10B5B2;
      cursor: pointer;
    }
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

const CarouselItem = ({film}) => {
  const {title, createAt, images, categories} = film;
  const image = images.length > 0 ? images[0].url : notFound;
  const category = categories.length > 0 ? categories[0].title : 'Hot!';
  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  const dateCreate = new Date(createAt);   
  return (
    <Ssection>
      <Image
          loader={myLoader}
          src={image}
          alt="Search image will start to search movies"
          width={250}
          height={350}/>
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

export default CarouselItem;