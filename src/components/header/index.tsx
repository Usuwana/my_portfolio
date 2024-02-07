
import "./styles.css";



const headingStyle = {
    
    marginRight: 50
    // Add more styles as needed
  };

  

export const Header  = () => {
    return(
        <div id="main">
        <h3 style= {headingStyle}>HOME</h3>
        {/* <h3>|</h3> */}
        <h3 style= {headingStyle}>PROJECTS</h3>
        {/* <h3>|</h3> */}
        <h3>CONTACT</h3>
    </div>
    )
}