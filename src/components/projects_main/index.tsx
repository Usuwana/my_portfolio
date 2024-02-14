import './styles.css';
import red from './/red.png';
import ac from './/ac.png';
import Spacer from 'react-styled-spacer';

export const ProjectsMain = () => {
    return(
<div>
<Spacer h={30} />
<div className="rowContainer">
      <div className="column">
        {/* Content for the first column */}
        <h4>RuesEvents Designs</h4>
        <img src={red} style={{display: 'block', width: '750px', height: '500px', margin: 'auto' }}/>
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
        <img src={ac} style={{display: 'block', width: '750px', height: '500px', margin: 'auto' }}/>
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