import Link from 'next/link'

interface ListItemProps {
    url: string,
    icon?: any,
    text: string,
}

export default function ListItem(props: ListItemProps) {
    return (
        <li>
            <Link 
            href={props.url}
            className="
            flex flex-col gap-2 items-center justify-center
            p-4 text-slate-700
            hover:bg-slate-300/50
            hover:text-sky-500
            focus:outline-none
            focus:bg-slate-300/50
            focus:text-sky-500">
                <div className="w-8">
                    {props.icon}
                </div>
                <p className="hidden md:block md:text-sm md:text-center">
                    {props.text}
                </p>
            </Link>
        </li>
    )
}