import * as React from 'react';
import styled from 'styled-components';

const Sdiv = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Sselect = styled.select`
  background-color: inherit;
  color: white;
  border-radius: 15px;
  width: auto;
  padding-left: 5px;
`;

const Ssection = styled.section`
  width: 80%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  background: #232A39;
`;



const Filter = () => {
  return (
    <Ssection>
      <Sdiv>
        <Sselect name='genre'>
          <option defaultChecked>All</option>
          <option value="value1">1</option>
          <option value="value2">2</option>
          <option value="value3">3</option>
          <option value="value4">4</option>
          <option value="value5">5</option>
        </Sselect>
        <Sselect name='date'>
          <option defaultChecked>All</option>
          <option value="value1">1</option>
          <option value="value2">2</option>
          <option value="value3">3</option>
          <option value="value4">4</option>
          <option value="value5">5</option>
        </Sselect>
      </Sdiv>
    </Ssection>
    
  )
}

export default Filter;
