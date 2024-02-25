import useWindowSize from '../../hooks/useWindowSize';
import { Size } from '../../types';
import './/styles.css'

export const Footer  = () => {
  const size: Size = useWindowSize();
    return size.width >= 900 ?(
        <footer className="footer" style={{backgroundColor: '#333', color: 'aliceblue', paddingBottom: '0px', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
        Developed by Tatenda Mapuranga using React.
      </footer>
    ) : (
      <footer style={{backgroundColor: '#333', color: 'aliceblue', paddingBottom: '0px', textAlign: 'center', position: 'fixed', bottom: 0, width: '100vw' }}>
        Developed by Tatenda Mapuranga using React.
      </footer>
    )
}