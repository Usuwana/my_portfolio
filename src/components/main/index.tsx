import "./styles.css";
import profpic from './/49365479.png';
import prof from './/prof.png';
import react from './/react.png';
import flutter from './/flutter.png';
import java from './/java.png';
import html from './/html.png';
import css from './/css.png';
import typescript from './/typescript.png';
import Spacer from 'react-styled-spacer'
import useWindowSize from "../../hooks/useWindowSize";
import { Size } from "../../types";
import { useState } from "react";


const profStyle = {
    
    //marginLeft: 50,
    width: 300,
    height: 300,
    //alignSelf: 'center',
    // Add more styles as needed
  };

const boxStyle = {
    //alignSelf: 'center',
    width: 600,
    height: 200
}


export const Main  = () => {
  const listItems = [html, css, typescript, react, flutter, java];
  const listItems1 = [html, css, typescript];
  const listItems2 = [react, flutter, java];
  const size: Size = useWindowSize();
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    }; 
    
    return size.width >= 900 ?(
        <div className="main" style={{display: 'flex', flexDirection: 'column', flex: 1 }} >
           <div className="column-container" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <Spacer h={30} />
              <div className="column" >
              <img src={prof} style={{display: 'block', width: '350px', height: '200px', margin: 'auto' }}/>
              </div>
              <div className="column" style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
              <p>Hello there! I'm Tatenda Mapuranga, a Cyber Security enthusiast currently mastering the art while holding a degree in Software Engineering. I thrive in the world of code as a Software Developer, always tweaking my web and mobile app development skills through exciting projects. I'm not just about coding; I've embraced the challenges of Full Stack development, and my journey involves balancing it all while pursuing my Cyber Security degree. Join me on this tech adventure – from coding marvels to securing the digital frontier!</p>
              </div>
              <Spacer h={20} />
              <h3 style={{display: 'block', margin: 'auto' }}>Tech Stack:</h3>
              <div className="column" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  {listItems.map((item, index) => (
                  <div key={index} style={{ margin: '10px', padding: '10px' }}>
                    {<img  style={{ width: '60px', height: '20px' }} src={item} />}
                  </div>
                ))}
               
                
            
              </div>
            </div>
        
        </div>
   
    ) :   size.width <= 320 ? (
      size.width >= 0 ? (
        <div className="main" style={{display: 'flex', flexDirection: 'column', flex: 1 }} >
           <div className="column-container" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <Spacer h={30} />
              <div className="column" >
              <img src={prof} style={{display: 'block', width: '350px', height: '200px', margin: 'auto' }}/>
              </div>
              <div className="flexible-paragraph">
              <p>Hello there! I'm Tatenda Mapuranga, a Cyber Security enthusiast currently mastering the art while holding a degree in Software Engineering. I thrive in the world of code as a Software Developer, always tweaking my web and mobile app development skills through exciting projects. I'm not just about coding; I've embraced the challenges of Full Stack development, and my journey involves balancing it all while pursuing my Cyber Security degree. Join me on this tech adventure – from coding marvels to securing the digital frontier!</p>
              </div>
              <Spacer h={20} />
              <h3 style={{display: 'block', margin: 'auto' }}>Tech Stack:</h3>
              <div className="column" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', overflow: 'hidden' }}>
                  {listItems1.map((item, index) => (
                  <div key={index} style={{ margin: '5px', padding: '10px' }}>
                    {<img  style={{ width: '60px', height: '20px' }} src={item} />}
                  </div>
                ))}
              </div>
              <div className="column" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', overflow: 'hidden' }}>
                  {listItems2.map((item, index) => (
                  <div key={index} style={{ margin: '5px', padding: '10px' }}>
                    {<img  style={{ width: '60px', height: '20px' }} src={item} />}
                  </div>
                ))}
              </div>
            </div>
        
        </div>
      ) : (
        <div className="main" style={{display: 'flex', flexDirection: 'column', flex: 1 }} >
           <div className="column-container" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <Spacer h={30} />
              <div className="column" >
              <img src={prof} style={{display: 'block', width: '350px', height: '200px', margin: 'auto' }}/>
              </div>
              <div className="column">
              <p style={{display: 'block', margin: '20px'}}>My name is Tatenda Mapuranga. I am a Masters in Cyber Security student and I hold a degree in Software Engineering. I am a Software Developer. I am currently enhancing my web development skillset through projects and I have also done work in mobile application development. Through my projects and experiences in software development, I have done Full Stack development and I hope to keep working towards being a Full Stack Developer alongside working towards finishing my Cyber Security degree in working as a Cyber Security Analyst. </p>
              </div>
              <Spacer h={20} />
              <h3 style={{display: 'block', margin: 'auto' }}>Tech Stack:</h3>
              <div className="column" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', overflow: 'hidden' }}>
                  {listItems1.map((item, index) => (
                  <div key={index} style={{ margin: '5px', padding: '10px' }}>
                    {<img  style={{ width: '60px', height: '20px' }} src={item} />}
                  </div>
                ))}
              </div>
              <div className="column" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', overflow: 'hidden' }}>
                  {listItems2.map((item, index) => (
                  <div key={index} style={{ margin: '5px', padding: '10px' }}>
                    {<img  style={{ width: '60px', height: '20px' }} src={item} />}
                  </div>
                ))}
              </div>
            </div>
        
        </div>
      )
      
    ) : (
      <div className="main" style={{display: 'flex', flexDirection: 'column', flex: 1 }} >
           <div className="column-container" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <Spacer h={30} />
              <div className="column" >
              <img src={prof} style={{display: 'block', width: '350px', height: '200px', margin: 'auto' }}/>
              </div>
              <div className="column">
              <p style={{display: 'block', margin: '20px'}}>My name is Tatenda Mapuranga. I am a Masters in Cyber Security student and I hold a degree in Software Engineering. I am a Software Developer. I am currently enhancing my web development skillset through projects and I have also done work in mobile application development. Through my projects and experiences in software development, I have done Full Stack development and I hope to keep working towards being a Full Stack Developer alongside working towards finishing my Cyber Security degree in working as a Cyber Security Analyst. </p>
              </div>
              <Spacer h={20} />
              <h3 style={{display: 'block', margin: 'auto' }}>Tech Stack:</h3>
              <div className="column" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', overflow: 'hidden' }}>
                  {listItems1.map((item, index) => (
                  <div key={index} style={{ margin: '5px', padding: '10px' }}>
                    {<img  style={{ width: '60px', height: '20px' }} src={item} />}
                  </div>
                ))}
              </div>
              <div className="column" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', overflow: 'hidden' }}>
                  {listItems2.map((item, index) => (
                  <div key={index} style={{ margin: '5px', padding: '10px' }}>
                    {<img  style={{ width: '60px', height: '20px' }} src={item} />}
                  </div>
                ))}
              </div>
            </div>
        
        </div>
    )
}