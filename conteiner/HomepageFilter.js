import * as React from 'react';
import styled from 'styled-components';
import FilmsList from '../components/FilmsList';
import Filter from '../components/Filter';

const Ssection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sbutton = styled.button`
  margin-bottom: 50px;
  width: 15%; 
  height: 5em;
  border: none;
  border-radius: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  background-color: #151f30;
  color: white;
  text-transform: uppercase;
  transition: background-color 1s;
  &:hover {
    background-color: #10B5B2;
    transition: background-color 1s;
  }
`;

const HomepageFilter = () => {
  return (
    <Ssection>
      <Filter/>
      <FilmsList/>
      <Sbutton>Load More</Sbutton>
    </Ssection>
  )
}

export default HomepageFilter;