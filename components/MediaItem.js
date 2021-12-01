import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Sli = styled.li`
  list-style-type: none;
  cursor: pointer;
`; 

const MediaItem = (props) => {
  const {link, logo} = props;
  return (
    <Sli>
      <Link href={link}>
        <Image 
          src={logo} 
          alt="Logo image will redirect to facebook page"
          width={25}
          height={25}/>
      </Link>
    </Sli>
  )
}

export default MediaItem;