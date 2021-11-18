import * as React from 'react';
import styled from 'styled-components';
import Film from './Film';

const Ssection = styled.section`
  width: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FilmsList = () => {
  return (
    <Ssection>
      <Film></Film>
      <Film></Film>
      <Film></Film>
      <Film></Film>
      <Film></Film>
    </Ssection>
    
  )
}

export default FilmsList;
