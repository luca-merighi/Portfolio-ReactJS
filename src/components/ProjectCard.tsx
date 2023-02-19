import Image from "next/image";

interface ProjectCardProps {
    url: string,
    img: any,
    text: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <a 
        href={props.url} 
        target="_blank"
        className={`
        flex flex-col gap-2 
        bg-slate-300 p-4
        border-2 border-slate-300 
        hover:bg-slate-400/50
        focus:bg-slate-400/50
        focus:outline-none
        focus:border-slate-700`}>
            <Image 
            src={props.img} 
            alt="Screenshot"
            className="
            h-40 
            rounded-t-md" />

            <h3 className="text-xl text-slate-700 font-bold text-center">
                {props.text}
            </h3>
        </a>
    )
}