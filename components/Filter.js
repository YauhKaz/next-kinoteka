import * as React from 'react';
import styled from 'styled-components';

const Sdiv = styled.div`
  margin: 30px 20px; 
  width: 26%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Sinputdiv = styled(Sdiv)`
  width: 260px;
  position: relative;
  background: #171C26;
  height: 40px;
  border-radius: 16px;
  z-index: 2;
`;

const Sinput = styled.input`
  display: none;
`;

const Slabel = styled.label`
  align-self: center;
  z-index: 100;
  padding: 0 10px;
  margin: 0 5px;
  border-radius: 15px;
  background: inherit;
  border: none;
  color: white;
  cursor: pointer;
  transition: color 1s;
  &:hover {
    color: #10B5B2;
    transition: color 1s;
  }
  &:checked {
    background-color: #77abff;
    transition-timing-function: cubic-bezier(.74,.14,.38,.99);
  }
`;

const Sselect = styled.select`
  background-color: inherit;
  color: white;
  border-radius: 15px;
  width: auto;
  padding-left: 5px;
  cursor: pointer;
`;

const Ssection = styled.section`
  margin-top: 60px;
  width: 80%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background: #232A39;
`;

const Ssliding = styled.div`
  position: absolute;
  transition: width 0.2s ease 0s, height 0.2s ease 0s, top 0.2s ease 0s, left 0.2s ease 0s;
  opacity: 0;
  left: 5px;
  top: 5px;
  z-index: 99;
  height: 30px;
  width: 80px;
  border-radius: 15px;
  background-color: #232A39;
`;



const Filter = () => {
  return (
    <Ssection>
      <Sdiv>
        <Sselect name='genre'>
          <option value="all">All</option>
          <option value="value1">1</option>
          <option value="value2">2</option>
          <option value="value3">3</option>
          <option value="value4">4</option>
          <option value="value5">5</option>
        </Sselect>
        <Sselect name='date'>
          <option value="all">All</option>
          <option value="value1">1</option>
          <option value="value2">2</option>
          <option value="value3">3</option>
          <option value="value4">4</option>
          <option value="value5">5</option>
        </Sselect>
      </Sdiv>
      <Sinputdiv>
        <Sinput type="radio" id="featured"/>
        <Slabel htmlFor="featured">Featured</Slabel>
        <Sinput type="radio" id="popular" />
        <Slabel htmlFor="popular">Popular</Slabel>
        <Sinput type="radio" id="newest" />
        <Slabel htmlFor="newest">Newest</Slabel>
        <Ssliding></Ssliding>
      </Sinputdiv>
    </Ssection>
  )
}

export default Filter;
