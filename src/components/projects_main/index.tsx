import './styles.css';
import red from './/red.png';
import ac from './/ac.png';
import realfun from './/realfun.png';
import Spacer from 'react-styled-spacer';

export const ProjectsMain = () => {
    return(
<div style={{backgroundColor: '#1C1A1A'}}>
<Spacer h={30} />
<div className="rowContainer">
      <div className="column">
        {/* Content for the first column */}
        <h4>RuesEvents Designs</h4>
        <a href="http://ruesevents.co.zw/" target="_blank"><img src={red} style={{display: 'block', width: '750px', height: '500px', margin: 'auto' }}/></a>
      </div>
      <div className="column">
        {/* Content for the second column */}
        <p>Second Column Content</p>
      </div>
</div>
<Spacer h={30} />
<div className="rowContainer">
      <div className="column">
        {/* Content for the first column */}
        <h4>Analogy Care</h4>
        <a href="https://analogycare.com/" target="_blank"><img src={ac} style={{display: 'block', width: '750px', height: '500px', margin: 'auto' }}/></a>
        <p>First Column Content</p>
      </div>
      <div className="column">
        {/* Content for the second column */}
        <p>Second Column Content</p>
      </div>
</div>
<Spacer h={30} />
<div className="rowContainer">
      <div className="column">
        {/* Content for the first column */}
        <h4>Realfun Learning Centre</h4>
        <a href="https://realfun-portfolio-portal.web.app/" target="_blank"><img src={realfun} style={{display: 'block', width: '750px', height: '500px', margin: 'auto' }}/></a>
        <p>First Column Content</p>
      </div>
      <div className="column">
        {/* Content for the second column */}
        <p>Second Column Content</p>
      </div>
</div>
</div>
    )
}