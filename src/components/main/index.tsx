import "./styles.css";
import profpic from './/49365479.png';
import react from './/react.png';
import flutter from './/flutter.png';
import java from './/java.png';


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

    return(
        <div className="main" >
           <div className="column-container" style={{ height: "100%", width: "100%"}}>
              <div className="column">
                <h2>Tech stack:</h2>
                <ul>
                  <li> <img  style={{ width: '20px', height: '20px' }} src={react} /> <span>React, React Native</span></li>
                  <li> <img  style={{ width: '20px', height: '20px' }} src={flutter} /> <span>Flutter</span></li>
                  <li> <img  style={{ width: '20px', height: '20px' }}  src={java}/> <span>Java</span></li>
                </ul>
            
              </div>
              <div className="column">
              <img src={profpic}/>
              </div>
              <div className="column">
              <p>I am a productive Fullstack Software Developer who is passionate about developing scalable, maintainable, cutting-edge web and mobile apps. Using flexible modern Software Architecture principles, I can work in a team or with minimal supervision to deliver high quality software products that meets and exceeds users' expectation.</p>
              </div>
            </div>
        
        </div>
   
    )
}