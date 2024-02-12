import github from './/github.png';
import linkedin from './/linkedin.png';
import dev from './/dev.png';
import hashnode from './/hashnode.png'
import "./styles.css";
import Spacer from 'react-styled-spacer';

export const FindMe  = () => {
    return (
        <div style={{ backgroundColor: '#1C1A1A', color: 'aliceblue', textAlign: 'center', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Spacer h={30} />
            <span>You can find me on:</span>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '50px', paddingBottom: '50px', height: '100%' }}>
                <img src={github} style={{ width: '40px', height: '40px', marginRight: '100px' }}/>
                <img src={linkedin} style={{ width: '40px', height: '40px',  marginRight: '100px'  }}/>
                <img src={dev} style={{ width: '40px', height: '40px',  marginRight: '100px'  }}/>
                <img src={hashnode} style={{ width: '40px', height: '40px' }}/>
            </div>
        </div>
    )
}