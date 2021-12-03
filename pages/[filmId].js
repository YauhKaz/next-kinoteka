import Header from '../conteiner/Header';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const SDiv = styled.div`
  background: url(https://dmitryvolkov.me/demo/flixtv/main/img/details.jpg) center top / cover no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 450px;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    z-index: 1;
    background: linear-gradient(180deg, rgba(19,23,32,0.5) 0%, #131720 100%);
    pointer-events: none;
  }
`

const SLink = styled.a`
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  transition: stroke 0.5s;
  :hover {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    svg {
      fill: #007bff;
    }
  }
  svg {
    width: 46px; 
    margin-right: 15px
  }
`

const SUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
  list-style: none;
  li {
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    color: #e0e0e0;
    padding-left: 20px;
    position: relative;
    :before {
      content: '';
      position: absolute;
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #2f80ed;
      left: -2px;
      top: 50%;
    }
  }
`

const NewUser = () => {
  const router = useRouter();
  const numberFilm = router.query.filmId;
  return (
    <Layout>
      <Header/>
      <section style={{ position: 'relative'}}>
        <SDiv/>
        <div style={{position: 'relative',
                    maxWidth: '960px',
                    display: 'flex',
                    flex: '1 0 100%',
                    flexWrap: 'wrap',
                    margin: '0 auto',
                    zIndex: '2',
                    paddingTop: '200px'}}>
          <div style={{flex: '0 0 100%',
                        maxWidth: '100%',
                        }}>
            <SLink href="http://www.youtube.com/watch?v=0O2aH4XLbto" >
              <svg fill="white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 245 245" >
                <path d="M122.5,0C54.953,0,0,54.953,0,122.5S54.953,245,122.5,245S245,190.047,245,122.5S190.047,0,122.5,0z M122.5,230
                C63.225,230,15,181.775,15,122.5S63.225,15,122.5,15S230,63.225,230,122.5S181.775,230,122.5,230z M91.094,200.659l93.981-78.159
                l-93.98-78.159L91.094,200.659z M106.095,76.325l55.521,46.175l-55.522,46.175L106.095,76.325z"/>
              </svg>
							Trailer
						</SLink>
          </div>
          <div>
            <h1 style={{fontSize: '36px'}}>The Fast and the Furious</h1>

            <SUl>
              <li>Action</li>
              <li>2021</li>
            </SUl>

            <p style={{display: 'block',
                      fontSize: '18px',
                      lineHeight: '26px',
                      fontWeight: '400',
                      color: '#e0e0e0',}}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
              content here', making it look like readable English.
            </p>
					</div>
          <div style={{width: '100%', height: '100%', marginBottom: '50px'}}>
            <video style={{width: '100%', height: '100%'}} id="player" playsinline controls dataPoster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg">
              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" size="576" type="video/mp4" />
              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" size="720" type="video/mp4" />
              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" size="1080" type="video/mp4" />

              <track kind="captions" label="English captions" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" srclang="en" default />
            </video>
						
					</div>

        </div>
      </section>
    </Layout>
  )
}

export default NewUser;