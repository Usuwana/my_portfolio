import github from './/github.png';
import linkedin from './/linkedin.png';
import dev from './/dev.png';
import hashnode from './/hashnode.png'
import "./styles.css";
import Spacer from 'react-styled-spacer';
import useWindowSize from '../../hooks/useWindowSize';
import { useState } from 'react';
import { Size } from '../../types';

export const FindMe  = () => {
    const size: Size = useWindowSize();
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const emailAddress = 'tatemapu@gmail.com';

  const mailtoLink = `mailto:${emailAddress}`;
    return size.width >= 900 ? (
        <div style={{ backgroundColor: '#1C1A1A', color: 'aliceblue', textAlign: 'center', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Spacer h={20} />
            <span>You can find me on:</span>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '50px', height: '100%' }}>
                <a href="https://github.com/Usuwana" target="_blank"><img src={github}  style={{ width: '40px', height: '40px',  marginRight: '100px'  }} className='github'/></a>
                <a href="https://www.linkedin.com/in/tatenda-usuwana-mapuranga-27692b1b6/" target="_blank"><img src={linkedin} style={{ width: '40px', height: '40px',  marginRight: '100px'  }} className='linkedin'/></a>
                <a href="https://dev.to/usuwana" target="_blank"><img src={dev} style={{ width: '40px', height: '40px',  marginRight: '100px'  }} className='dev'/></a>
                <a href="https://hashnode.com/@Usuwana" target="_blank"><img src={hashnode} style={{ width: '40px', height: '40px' }} className='hashnode'/></a>
            </div>
            <span style={{color: 'aliceblue', paddingTop: "10px"}}>Or email me at: </span>
            <Spacer h={20}/>
            <div style={{paddingBottom: "50px"}}>
                
                <span style={{color: 'aliceblue'}}> <h4><a href={mailtoLink} style={{textDecoration: 'underline'}}>tatemapu@gmail.com</a></h4></span>
            </div>
        </div>
    ) : (
        <div style={{ backgroundColor: '#1C1A1A', color: 'aliceblue', textAlign: 'center', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Spacer h={20} />
            <span>You can find me on:</span>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '50px', height: '100%', paddingBottom: '50px' }}>
                <a href="https://github.com/Usuwana" target="_blank"><img src={github}  style={{ width: '40px', height: '40px'}} className='github'/></a>
                <a href="https://www.linkedin.com/in/tatenda-usuwana-mapuranga-27692b1b6/" target="_blank"><img src={linkedin} style={{ width: '40px', height: '40px', marginLeft: '20px'}} className='linkedin'/></a>
                <a href="https://dev.to/usuwana" target="_blank"><img src={dev} style={{ width: '40px', height: '40px', marginLeft: '20px'}} className='dev'/></a>
                <a href="https://hashnode.com/@Usuwana" target="_blank"><img src={hashnode} style={{ width: '40px', height: '40px', marginLeft: '20px' }} className='hashnode'/></a>
            </div>
            <span style={{color: 'aliceblue', paddingTop: "10px"}}>Or email me at: </span>
            <Spacer h={20}/>
            <div style={{paddingBottom: "50px"}}>
                
            <span style={{color: 'aliceblue'}}> <h4><a href={mailtoLink} style={{textDecoration: 'underline'}}>tatemapu@gmail.com</a></h4></span>
            </div>
            
        </div>
    )
}