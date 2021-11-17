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

const HomepageFilter = () => {
  return (
    <Ssection>
      <Filter/>
      <FilmsList/>
    </Ssection>
  )
}

export default HomepageFilter;