import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import { SmilingFace, WavingHandIcon } from '../icons'

export default function About() {
    return (
        <React.Fragment>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <title>Luca Merighi | Sobre Mim</title>
            </Head>
            <Layout sendPageTitle="Sobre Mim">
                <div className="
                    flex flex-col gap-4">
                    <div className="
                        px-4 py-6 bg-slate-100
                        flex gap-4 items-center
                        rounded-md
                        shadow-card">
                        <h3 className="text-slate-700 text-xl font-bold">
                            Olá, meu nome é &nbsp;
                            <span className="text-sky-500">
                                Luca Merighi    
                            </span> 
                        </h3>
                        <div className="flex gap-2 items-center">
                            <div className="w-6">
                                {SmilingFace}                                
                            </div>
                            <div className="w-6">
                                {WavingHandIcon}                                
                            </div>
                        </div>
                    </div>
                    <div className="
                        px-4 py-6 bg-slate-100
                        rounded-md
                        shadow-card">
                        <p className="
                            text-slate-700/75">
                                Sou um desenvolvedor da web focado mais no front-end, mas também sei um pouco sobre back-end. Iniciei meus estudos na programação em Outubro de 2020, sempre mantendo a prática desenvolvedo novos projetos e pretendo seguir carreira na área de Tecnologia, tanto em um emprego fixo quanto freelance.
                        </p>
                        <p className="
                            text-slate-700/75">
                                Fique a vontade para me enviar uma mensagem pelo meus contatos :D
                        </p>
                    </div>
                </div>   
            </Layout>
        </React.Fragment>
    )
}