interface HeaderProps {
    pageTitle: string
}

export default function Header(props: HeaderProps) {
    return (
        <header className="
            p-4 bg-gray-800
            flex gap-2 items-center
            w-full">
            <h1 className="
                text-sky-500 text-2xl font-bold">
                    &lt;/&gt; Luca Merighi  
            </h1>
            <div className="h-6 w-bar bg-sky-500/50" />
            <h3 className="text-sky-500 text-xl">
                {props.pageTitle}
            </h3>
        </header>
    )
}