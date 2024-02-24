import { useEffect } from "react"
import { FindMe } from "../../components/findme"
import { Footer } from "../../components/footer"
import Forms from "../../components/form"
import { Header } from "../../components/header"
import Spacer from "react-styled-spacer"

export const Contact  = () => {
    useEffect(() => {
        document.title = "Tatenda Mapuranga - Contact"
      }, [])
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#1C1A1A', overflow: 'hidden'}}>
            <Header home={false} projects={false} contact={true}/>
            <Forms/>
            <FindMe/>
            
            <Footer/>
        </div>
    )
}