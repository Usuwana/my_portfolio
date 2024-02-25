import { FindMe } from "../../components/findme"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { Main } from "../../components/main"
import useWindowSize from "../../hooks/useWindowSize";
import "./styles.css";
import { Size } from '../../types'
import { useEffect } from 'react'

export const Home  = () => {
    const size: Size = useWindowSize();
    useEffect(() => {
        document.title = "Tatenda Mapuranga - Home"
      }, [])
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#1C1A1A'}}>
            <Header home={true} projects={false} contact={false}/>
            <Main/>
            <FindMe/>
            <Footer/>
        </div>
    )
}