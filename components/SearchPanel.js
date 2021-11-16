import * as React from 'react';
import Image from 'next/image';
import searchIcon from '../public/search-icon.svg';
import styled from 'styled-components';

const Sform = styled.form`
  width: 25%;
  height: 30%;
  background-color: #232A39;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
`;

const Sinput = styled.input`
  padding-left: 5%;
  width: 84%;
  background: inherit;
  color: white;
  border: none;
  outline: none;
  color: #10B5B2;
`;

const Sfbutton = styled.button`
  width: 10%;
  height: 20px;
  background: inherit;
  border: none;
  cursor: pointer;
  &hover {
    fill: #10B5B2;
  }
`;

const SearchPanel = () => {
  return (
    <Sform>
      <Sinput type='text'/>
      <Sfbutton type='button'>
        <Image
          src={searchIcon} 
          alt="Search image will start to search movies"
          width={50}
          height={50}/>
      </Sfbutton>
    </Sform>
  )
}

export default SearchPanel;