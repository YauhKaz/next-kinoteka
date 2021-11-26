import * as React from 'react';
import { useSelector } from 'react-redux';
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
  const films = useSelector(state => state.films);
  console.log(films);
  return (
    <Ssection>
      {films.length > 0 && films.map(item => <Film film = {item}/>)}
    </Ssection>
  )
}

export default FilmsList;
