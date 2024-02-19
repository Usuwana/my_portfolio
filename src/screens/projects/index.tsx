import { FindMe } from "../../components/findme"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { ProjectsMain } from "../../components/projects_main"

export const Projects  = () => {
    return (
        <div style={{height: '100vh', width: '100vw', backgroundColor: '#1C1A1A'}}>
            <Header/>
            <ProjectsMain/>
            <FindMe/>
            <Footer/>
        </div>
    )
}