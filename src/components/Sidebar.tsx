import ListItem from './ListItem'

import {HomeIcon, ProjectsIcon, UserIcon, GoldenMedal} from '../icons'

export default function Sidebar() {
    return (
        <ul 
        className="
            bg-slate-200
            flex flex-row justify-center w-full 
            md:flex-col md:justify-start md:w-28">
            <ListItem 
            url="/"
            icon={HomeIcon}
            text="Início" />
            <ListItem 
            url="/Projects"
            icon={ProjectsIcon}
            text="Meus Projetos" />
            <ListItem 
            url="/About"
            icon={UserIcon}
            text="Sobre Mim" />
            <ListItem 
            url="/Certificates"
            icon={GoldenMedal}
            text="Meus Certificados" />
        </ul>
    )
}