import React, {FunctionComponent} from "react";
import {TitleCard, SetProfile} from "../components";
import { Link } from "react-router-dom";
import styles from "./style/about.module.css";
import backgroundImage from "../assets/Background/pattern.png"

const About: FunctionComponent = () => {
    return (
        <div className=" min-h-screen">
            <TitleCard title={"A Propos de Nous"} />
            <div className="flex justify-center">
                <SetProfile />
            </div>
            <div
                className="mx-10 my-10 p-6 md:p-10 rounded-lg shadow-6-strongB text-justify font-serif text-lg leading-relaxed"
                style={{backgroundImage: `url(${backgroundImage})`}}
            >
                <h2 className={`${styles.title} font-bold text-3xl text-blue-900 mb-6 italic`}>
                    Atlante Création Numérique
                </h2>
                <p>
                    Bienvenue chez <span className="font-bold">Atlante Création Numérique</span> (ACN), là où l&lsquo;imagination prend
                    vie et où vos idées se transforment en réalités captivantes.
                </p>
                <p className="mt-4">
                    Nous sommes une entreprise de création multimédia et de développement web qui a pour vocation de fournir des
                    solutions innovantes, personnalisées et personnalisables afin de donner vie à vos projets.
                </p>

                <h3 className="font-bold text-xl text-blue-800 mt-6 mb-4 italic">Vous cherchez à captiver votre audience et à laisser une impression durable ?</h3>

                <p>
                    ACN est là pour vous. Notre équipe d&lsquo;experts passionnés maîtrise un large éventail de compétences, notamment la
                    réalisation de vidéos, le montage vidéo, le marketing digital, le sound design, le Motion Design, la prise de
                    vidéos et photos aériennes à l&lsquo;aide de drones professionnels, le développement informatique et la création de
                    sites et d&lsquo;applications web. Nous sommes également spécialisés dans la vérification de toitures, la réalisation
                    de vidéos publicitaires et la création de visites virtuelles pour les commerces.
                </p>
                <p className="mt-4">
                    Chez ACN, nous croyons en l&lsquo;importance de comprendre vos besoins spécifiques et de travailler en étroite
                    collaboration avec vous pour créer des contenus percutants et de haute qualité qui reflètent votre vision.
                </p>
                <p className="mt-4">
                    Que vous soyez une start-up cherchant à se démarquer, une entreprise établie souhaitant renouveler son image
                    ou à la recherche d&lsquo;une solution web ou informatique sur mesure, nous sommes prêts à relever le défi et à vous
                    aider à atteindre de nouveaux sommets.
                </p>
                <p className="mt-4">
                    Laissez-nous transformer votre vision en une expérience inoubliable pour votre public. Faites confiance à ACN
                    pour vous propulser dans l&lsquo;univers du numérique et rejoignez dès aujourd&lsquo;hui notre liste de clients satisfaits.
                </p>
                <p className="mt-4">
                    N&lsquo;attendez plus, <Link to="/Home" className="text-blue-600 underline">contactez-nous</Link> et découvrez comment Atlante Création Numérique peut donner vie
                    à vos projets, développer votre présence en ligne et vous aider à marquer les esprits.
                </p>
                <p className="mt-4 font-bold text-xl text-blue-800">
                    Bienvenue dans le futur de la création numérique !
                </p>
            </div>
        </div>
);
};

export default About;

