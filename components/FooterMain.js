import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Ssection = styled.section`
  width: 20%;
  height: 100%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 80%;
  }
`;

const Sul = styled.ul`
  width: 100%;
  height: 100px;
  padding 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: fit-content;
  }
`;

const Sli = styled.li`
  list-style-type: none;
  cursor: pointer;
  transition: color 1s;
  @media (max-width: 700px) {
    height: fit-content;
    padding-right: 5px;
  }
  &:hover {
    transition: color 1s;
    color: #10B5B2;
  }
`; 

const FooterMain = () => {
  return (
    <Ssection>
      <h3>FlixTV</h3>
      <Sul>
        <Sli><Link href='/'>About us</Link></Sli>
        <Sli><Link href='/'>My profile</Link></Sli>
        <Sli><Link href='/'>Pricing plans</Link></Sli>
        <Sli><Link href='/'>Contacts</Link></Sli>
      </Sul>
    </Ssection>
  )
}

export default FooterMain;