import Header from './Header'
import Sidebar from './Sidebar'

interface LayoutProps {
    sendPageTitle: string,
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="flex flex-col flex-grow h-screen w-screen">
            <Header pageTitle={props.sendPageTitle} />

            <main className="
            flex flex-col md:grid md:grid-cols-dashboard h-full">
                <Sidebar />

                <section className="bg-slate-300 p-10">
                    {props.children}
                </section>
            </main>
        </div>
    )
}