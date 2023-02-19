import React from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

import PhotoAlbumScreen from "../images/projects-screenshots/photo-album.png"
import RocketNewsScreen from "../images/projects-screenshots/rocket-news.jpg"
import LoginFormScreen from "../images/projects-screenshots/login-form.png"
import CountdownScreen from "../images/projects-screenshots/countdown.jpg"
import PomodoroScreen from "../images/projects-screenshots/pomo.timer.jpg"
import BeautySalonScreen from "../images/projects-screenshots/beauty-salon.png"
import RocketCoffeeScreen from "../images/projects-screenshots/rocket-coffe.jpg"
import DoctorCareScreen from "../images/projects-screenshots/doctor-care.png"
import DoggyShelterScreen from "../images/projects-screenshots/doggy-shelter.jpg"
import RocketBlogScreen from "../images/projects-screenshots/rocket-blog.png"
import RocketTreeScreen from "../images/projects-screenshots/rocket-tree.png"
import EmpBdScreen from "../images/projects-screenshots/employee.birthday.png"

export default function Projects() {
    return (
        <React.Fragment>
            <Head>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <title>Luca Merighi | Meus Projetos</title>
            </Head>    
            <Layout sendPageTitle="Meus Projetos">
                <div className="
                    flex flex-col gap-4">
                    <div className="
                        px-4 py-6 bg-slate-100
                        flex flex-col gap-4
                        rounded-md
                        shadow-card">
                        <h3 className="text-sky-500 text-xl font-bold">
                            Projetos que desenvolvi ao longo da minha carreira!
                        </h3>
                        <p className="
                            text-slate-700/75 md:w-1/2">
                            Esses são os projetos que mais tenho orgulho de ter desenvolvido.
                        </p>
                    </div>

                    <div className="
                        p-4 bg-slate-100
                        flex flex-col gap-6
                        md:grid md:grid-cols-3
                        rounded-md
                        shadow-card">
                        
                        <ProjectCard
                            url="https://luca-merighi.github.io/Employee.Birthday/"
                            img={EmpBdScreen}
                            text="Employee Birthday" />   
                        
                        <ProjectCard
                            url="https://luca-merighi.github.io/Maratona-Explorer-2/"
                            img={RocketTreeScreen}
                            text="Rocket Tree" />   
                        
                        <ProjectCard
                            url="https://luca-merighi.github.io/DesafioDiscover-RocketBlog/"
                            img={RocketBlogScreen}
                            text="Rocket Blog" />   
                        
                        <ProjectCard
                            url="https://doggy-shelter.vercel.app/"
                            img={DoggyShelterScreen}
                            text="Doggy Shelter" />   
                        
                        <ProjectCard
                            url="https://luca-merighi.github.io/NLW8-Return-Origin/"
                            img={DoctorCareScreen}
                            text="Doctor Care" />   
                        
                        <ProjectCard
                            url="https://luca-merighi.github.io/DesafioDiscover-RocketCoffee/"
                            img={RocketCoffeeScreen}
                            text="Rocket Coffee" />   
                        
                        <ProjectCard
                            url="https://luca-merighi.github.io/NLW6-Together-OriginSix/"
                            img={BeautySalonScreen}
                            text="Beauty Salon" />   
                        
                        <ProjectCard
                            url="https://pomo-timer-vercel.vercel.app/login-form/index.html"
                            img={PomodoroScreen}
                            text="Pomo Timer" />   
                        
                        <ProjectCard
                            url="https://luca-merighi.github.io/DesafioDiscover-Countdown/"
                            img={CountdownScreen}
                            text="Countdown" />   
                        
                        <ProjectCard
                            url="https://luca-merighi.github.io/DesafioDiscover-LoginForm/"
                            img={LoginFormScreen}
                            text="Login Form" />   

                        <ProjectCard
                        url="https://luca-merighi.github.io/DesafioDiscover-RocketNews/"
                        img={RocketNewsScreen}
                        text="Rocket News" />                        

                        <ProjectCard
                            url="https://photo-album-five.vercel.app/home"
                            img={PhotoAlbumScreen}
                            text="Photo Album" />                           
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}