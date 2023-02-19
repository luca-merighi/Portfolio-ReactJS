import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

import Certificate1 from '../images/certificado-webmoderno.jpg'
import Certificate2 from '../images/certificado-nextjs.jpg'
import Certificate3 from '../images/certificado-ti.jpg'
import Image from 'next/image'

export default function Certificates() {
    return (
        <React.Fragment>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <title>Luca Merighi | Certificados</title>
            </Head>
            <Layout sendPageTitle="Meus Certificados">
            <div className="
                    flex flex-col gap-4">
                    <div className="
                        px-4 py-6 bg-slate-100
                        flex flex-col gap-4
                        rounded-md
                        shadow-card">
                        <h3 className="text-sky-500 text-xl font-bold">
                            Certificados que conquistei ao longo da minha carreira!
                        </h3>
                        <p className="
                            text-slate-700/75 md:w-1/2">
                            Esses são os certificados que considero ter valor e que adquiri participando de cursos e eventos na internet.
                        </p>
                    </div>
                    <div className="
                        px-4 py-6 bg-slate-100
                        rounded-md
                        shadow-card">
                        <figure className="
                            flex flex-col
                            md:grid md:grid-cols-3 gap-6">
                            <Image src={Certificate1} alt="Certificado Web Moderno" />
                            <Image src={Certificate2} alt="Certificado NextJS" />
                            <Image src={Certificate3} alt="Certificado TI" />
                        </figure>
                    </div>
                </div>   
            </Layout>
        </React.Fragment>
    )
}