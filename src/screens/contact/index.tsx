import { FindMe } from "../../components/findme"
import { Footer } from "../../components/footer"
import Forms from "../../components/form"
import { Header } from "../../components/header"

export const Contact  = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#1C1A1A'}}>
            <Header/>
            <Forms/>
            <FindMe/>
            <Footer/>
        </div>
    )
}