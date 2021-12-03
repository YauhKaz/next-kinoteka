import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import notFound from '../public/image-not-found.png';

const SectionLayout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const Ssection = styled.section`
  width: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  border-radius: 16px;
  transform: scale(1);
  transition: transform 1s;
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
      cursor: pointer;
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
    transform: scale(0.5);
    opacity: 0;
    transition: all 1s;
    position: absolute;
    left: 0%;
    top: 9%;
    border-radius: 50px;
    cursor: pointer;
  }
`;

const Sdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & h2 {
    width: 210px;
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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
  const {id, title, createAt, images, categories} = film;
  const image = images.length > 0 ? images[0].url : notFound;
  const category = categories.length > 0 ? categories[0].title : 'Hot!';
  const myLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  const dateCreate = new Date(createAt);        
  return (
    <SectionLayout>
      <Ssection>
        <Link href={`/${id}`} >
          <Image
            loader={myLoader}
            src={image}
            alt="Search image will start to search movies"
            width={210}
            height={295}/>
        </Link>  
        <Sdiv>
          <Link href={`/${id}`}>
            <h2>{title}</h2> 
          </Link>   
          <Sflexrow>
            <Sli>Cost</Sli>
            <Sli>{category}</Sli>
            <Sli>{`${dateCreate.getFullYear()}`}</Sli>
          </Sflexrow>
        </Sdiv>
        <Link href={`/${id}`}>
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 245 245" >
            <path d="M122.5,0C54.953,0,0,54.953,0,122.5S54.953,245,122.5,245S245,190.047,245,122.5S190.047,0,122.5,0z M122.5,230
            C63.225,230,15,181.775,15,122.5S63.225,15,122.5,15S230,63.225,230,122.5S181.775,230,122.5,230z M91.094,200.659l93.981-78.159
            l-93.98-78.159L91.094,200.659z M106.095,76.325l55.521,46.175l-55.522,46.175L106.095,76.325z"/>
          </svg>
        </Link>
      </Ssection>
    </SectionLayout>
    
  )
}

export default Film;