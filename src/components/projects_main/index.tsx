import './styles.css';
import red from './/red.png';
import ac from './/ac.png';
import port from './/port2024.png';
import realfun from './/realfun.png';
import watch1 from './/watch1.jpeg';
import watch2 from './/watch2.jpeg';
import watch3 from './/watch3.jpeg';
import watchlist from './/watchlist.png';
import Spacer from 'react-styled-spacer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useWindowSize from '../../hooks/useWindowSize';
import { Size } from '../../types';
import { useState } from 'react';

export const ProjectsMain = () => {
  const size: Size = useWindowSize();
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
  
  
    return size.width >= 900 ?(
      
    <div style={{marginTop: '100px', marginLeft: '40px'}}>
      <Carousel 
        
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={true}
        ssr={true}
        infinite={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        
        >
          <div className="card"><a href="https://usuwana.dev/" target="_blank"><img src={port} style={{width: '400px', height: '250px'}}/>
          <div className="card-content">
          <h3 className="card-title">My Portfolio 2024</h3>
          <p className="card-para">React</p>
          </div>
          </a>
          </div>
          <div className="card"><a href="http://ruesevents.co.zw/" target="_blank"><img src={red} style={{width: '400px', height: '250px'}}/>
          <div className="card-content">
          <h3 className="card-title">RuesEvents Designs</h3>
          <p className="card-para">React</p>
          </div>
          </a>
          </div>
          <div className="card"><a href="https://analogycare.com/" target="_blank"><img src={ac} style={{width: '400px', height: '250px'}}/>
          <div className="card-content">
          <h3 className="card-title">Analogy Care</h3>
          <p className="card-para">React</p>
          </div>
          </a>
          </div>
          <div className="card"><a href="https://realfun-portfolio-portal.web.app/" target="_blank"><img src={realfun} style={{width: '400px', height: '250px'}}/>
          <div className="card-content">
          <h3 className="card-title">Realfun Learning Centre</h3>
          <p className="card-para">React, Google Firebase</p>
          </div>
          </a>
          </div>
          <div className="card"><a href="https://play.google.com/store/apps/details?id=dev.usuwana.my_watchlist" target="_blank"><img src={watchlist} style={{width: '400px', height: '250px'}}/>
          <div className="card-content">
          <h3 className="card-title">My Watchlist</h3>
          <p className="card-para">Dart, Flutter, Google Firebase, REST API</p>
          </div>
          </a>
          </div>
    </Carousel>
    </div>
    ) : (
      <div style={{display: 'block', backgroundColor: '#333'}}>
         <Spacer h={30} />
        <div className='card'>
        <a href="https://analogycare.com/" target="_blank"><img src={ac} className="responsive-image"/></a>
        <h3>Analogy Care</h3>
        </div>
        <Spacer h={30} />
        <div className='card'>
        <a href="http://ruesevents.co.zw/" target="_blank"><img src={red} className="responsive-image"/></a>
        <h3>RuesEvents Designs</h3>
        </div>
        <Spacer h={30} />
        <div className='card'>
        <a href="https://realfun-portfolio-portal.web.app/" target="_blank"><img src={realfun} className="responsive-image"/></a>
        <h3>Realfun Learning Centre</h3>
        </div>
        <Spacer h={30} />
        <div className='card'>
        <a href="https://play.google.com/store/apps/details?id=dev.usuwana.my_watchlist" target="_blank"><img src={watchlist} className="responsive-image"/></a>
        <h3>My Watchlist</h3>
        </div>
    </div>
    )
}