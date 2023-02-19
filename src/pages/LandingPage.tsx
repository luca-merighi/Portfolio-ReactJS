import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

import {
    MappinIcon, EmailIcon, GithubIcon, LinkedInIcon, 
    HtmlIcon, CssIcon, JavaScriptIcon, TailwindIcon,
    SwiperIcon, BootstrapIcon, ReactIcon, 
    TypescriptIcon, SassIcon} from '../icons/index'

export default function LandingPage() {
    return (
        <React.Fragment>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <title>Luca Merighi | Home</title>
            </Head>

            <Layout sendPageTitle="Início">
                <div className="flex flex-col gap-6 md:w-2/3">
                    <div className="
                        flex flex-col
                        md:flex-row gap-6">
                        <div className="
                            w-full
                            md:w-96 p-4 bg-slate-100
                            flex flex-col gap-2 items-center
                            rounded-md
                            shadow-card">
                            <figure>
                                <img 
                                src="https://avatars.githubusercontent.com/u/73050019?v=4" 
                                alt=""
                                className="
                                w-40 p-1
                                border-2 border-sky-500
                                rounded-full" />
                            </figure>
                            <h3 className="text-slate-700 font-bold text-center">
                                Luca Merighi
                            </h3>
                            <p className="text-slate-700/75 text-center">
                                Desenvolvedor web
                            </p>
                        </div>
                        
                        <div className="
                            w-full p-4 bg-slate-100
                            flex flex-col gap-2
                            rounded-md
                            shadow-card">
                            <h3 className="text-slate-700 font-medium text-xl">
                                Informações
                            </h3>
                            <ul className="flex flex-col gap-2">
                                <li className="
                                    flex gap-2 items-center
                                    text-slate-700/75">
                                        <div 
                                        className="w-6"
                                        title="Localização">
                                            {MappinIcon}
                                        </div>
                                        Campinas, São Paulo
                                </li>
                                <li className="
                                    flex gap-2 items-center
                                    text-slate-700/75">
                                        <div 
                                        className="w-6"
                                        title="Email">
                                            {EmailIcon}
                                        </div>
                                        whalesflying5@gmail.com
                                </li>
                                <li className="
                                    flex gap-2 items-center
                                    text-slate-700/75">
                                        <div 
                                        className="w-6"
                                        title="GitHub">
                                            {GithubIcon}
                                        </div>
                                        luca-merighi
                                </li>
                                <li className="
                                    flex gap-2 items-center
                                    text-slate-700/75">
                                        <div 
                                        className="w-6"
                                        title="LinkedIn">
                                            {LinkedInIcon}
                                        </div>
                                        Luca Merighi
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="
                    p-4 bg-slate-100 
                    flex flex-col gap-4
                    rounded-md
                    shadow-card">
                        <h3 className="text-slate-700 font-medium text-xl">
                            Tecnologias
                        </h3>
                        <figure className="
                            flex flex-wrap gap-4 items-center">
                            <div 
                            className="w-10" 
                            title="HTML Icon">
                                {HtmlIcon}
                            </div>
                            <div 
                            className="w-10"
                            title="CSS Icon">
                                {CssIcon}
                            </div>
                            <div 
                            className="w-10"
                            title="JavaScript Icon">
                                {JavaScriptIcon}
                            </div>
                            <div 
                            className="w-10"
                            title="TailwindCSS Icon">
                                {TailwindIcon}
                            </div>
                            <div 
                            className="w-10"
                            title="SwiperJS Icon">
                                {SwiperIcon}
                            </div>
                            <div 
                            className="w-10"
                            title="Bootstrap Icon">
                                {BootstrapIcon}
                            </div>
                            <div 
                            className="w-10"
                            title="ReactJS Icon">
                                {ReactIcon}
                            </div>
                            <div 
                            className="w-10"
                            title="TypeScript Icon">
                                {TypescriptIcon}
                            </div>
                            <div 
                            className="w-10"
                            title="Sass Icon">
                                {SassIcon}
                            </div>
                        </figure>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}