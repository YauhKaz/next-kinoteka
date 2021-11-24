import * as React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SubsItem from '../components/SubsItem';
import { getAllSubs } from '../Subdata';

const HomepageSubscription = () => {
  const subs = getAllSubs();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Sh2 = styled.h2`
    margin-left: 100px;
  `;
 
  return (
    <section>
      <Sh2>Subscriptions</Sh2>
      <Carousel responsive={responsive} infinite={true}>
        { subs.map(item => <SubsItem key = {item.id} title = {item.title} url = {item.url}/>)}
      </Carousel>
    </section>
  )
}

export default HomepageSubscription;