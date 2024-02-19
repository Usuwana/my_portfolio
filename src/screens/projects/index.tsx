import { useEffect } from "react"
import { FindMe } from "../../components/findme"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { ProjectsMain } from "../../components/projects_main"

export const Projects  = () => {
    useEffect(() => {
        document.title = "Tatenda Mapuranga - Projects"
      }, [])
    return (
        <div style={{height: '100vh', width: '100vw', backgroundColor: '#1C1A1A'}}>
            <Header home={false} projects={true} contact={false}/>
            <ProjectsMain/>
            <FindMe/>
            <Footer/>
        </div>
    )
}