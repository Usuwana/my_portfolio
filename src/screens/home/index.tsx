import { FindMe } from "../../components/findme"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { Main } from "../../components/main"
import "./styles.css";

export const Home  = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#1C1A1A'}}>
            <Header/>
            <Main/>
            <FindMe/>
            <Footer/>
        </div>
    )
}