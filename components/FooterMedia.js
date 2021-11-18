import * as React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import MediaItem from './MediaItem';
import facebookLogo from '../public/facebook_logo.svg';
import twitterLogo from '../public/twitter_logo.svg';
import instagramLogo from '../public/Instagram_logo.svg';
import vkontakteLogo from '../public/vkontakte_logo.svg';
import tiktokLogo from '../public/tiktok_logo.svg';

const Ssection = styled.section`
  margin-left: 50px;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Sul = styled.ul`
  width: 100%;
  padding 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: filter 1s;
  &:hover {
    filter: grayscale(70%);
    transition: filter 1s;
  }
`;

const FooterMedia = () => {
  const logos = [
    {
      logo: facebookLogo,
      link: 'https://www.facebook.com/',
    },
    {
      logo: twitterLogo,
      link: 'https://www.twitter.com/',
    },
    {
      logo: instagramLogo,
      link: 'hhttps://www.instagram.com/',
    },
    {
      logo: vkontakteLogo,
      link: 'https://vk.com/',
    },
    {
      logo: tiktokLogo,
      link: 'https://www.tiktok.com/',
    }];
  return (
    <Ssection>
      <Logo/>
      <p>Movies and TV Shows, Online cinema, Movie database HTML Template.</p>
      <Sul>
        {logos.map(item => <MediaItem key={item.link} logo={item.logo} link={item.link} />)}
      </Sul>
    </Ssection>
  )
}

export default FooterMedia;