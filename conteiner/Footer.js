import * as React from 'react';
import styled from 'styled-components';
import FooterMedia from '../components/FooterMedia';
import FooterMain from '../components/FooterMain';
import FooterBrowse from '../components/FooterBrowse';
import FooterHelp from '../components/FooterHelp';

const Ssection = styled.section`
  margin-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  heigth: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => {
  return (
    <Ssection>
      <FooterMedia/>
      <FooterMain/>
      <FooterBrowse/>
      <FooterHelp/>
    </Ssection>
  )
}

export default Footer;