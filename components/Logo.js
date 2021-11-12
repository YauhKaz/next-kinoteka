import * as React from 'react';
import Image from 'next/image';
import logoImage from '../public/movie-clapper-open.png';

const Logo = () => {
  return (
    <div>
      <Image 
        src={logoImage} 
        alt="Logo image will redirect to home page"
        width={35}
        height={35}/>
    </div>
  )
}

export default Logo;
