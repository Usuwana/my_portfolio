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

    return(
        <div className="main" style={{display: 'flex', flexDirection: 'column', flex: 1 }} >
           <div className="column-container" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <Spacer h={30} />
              <div className="column" >
              <img src={prof} style={{display: 'block', width: '350px', height: '200px', margin: 'auto' }}/>
              </div>
              <div className="column" style={{textAlign: 'center', justifyContent: 'center' }}>
              <p>My name is Tatenda Mapuranga. I am a Masters in Cyber Security student and I hold a degree in Software Engineering. I am a Software Developer. I am currently enhancing my web development skillset through projects and I have also done work in mobile application development. Through my projects and experiences in software development, I have done Full Stack development and I hope to keep working towards being a Full Stack Developer alongside working towards finishing my Cyber Security degree in working as a Cyber S3ecurity Analyst. </p>
              </div>
              <Spacer h={20} />
              <h3 style={{display: 'block', margin: 'auto' }}>Tech Stack:</h3>
              <div className="column" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  {listItems.map((item, index) => (
                  <div key={index} style={{ margin: '10px', padding: '10px' }}>
                    {<img  style={{ width: '60px', height: '20px' }} src={item} />}
                  </div>
                ))}
                {/* <h2>Tech stack:</h2>
                <ul style={{display: 'flex', margin: 'auto' }}>
                  <li> <img  style={{ width: '20px', height: '20px' }} src={react} /> <span>React, React Native</span></li>
                  <li> <img  style={{ width: '20px', height: '20px' }} src={flutter} /> <span>Flutter</span></li>
                  <li> <img  style={{ width: '20px', height: '20px' }}  src={java}/> <span>Java</span></li>
                </ul> */}
                
            
              </div>
            </div>
        
        </div>
   
    )
}