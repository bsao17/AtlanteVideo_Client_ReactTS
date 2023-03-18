import React, {useContext} from "react";
import {TitleCard, SetProfile} from "../components";
import {FunctionComponent} from "react";
import {Link} from "react-router-dom";
import {Context} from "../context/Context";

const About: FunctionComponent = ()=>{
    const context = useContext(Context)

    return(
        <div>
            <TitleCard title={"Historique et projets d'Atlante-Production"}/>
            <div>
                <SetProfile/>
            </div>
             <div className="text-black bg-gray-300 mx-10 text-justify font-serif border border-2 border-white shadow shadow-5-strong rounded text-lg p-5">
                Bienvenue chez Atlante Création Numérique (ACN),<br/><br/>
                 Là où l&lsquo;imagination prend vie et où vos idées se
                 transforment en réalités captivantes. <br/><br/>
                 Nous sommes une entreprise de création multimédia et de développement web et informatique qui a pour vocation de fournir
                 des solutions innovantes, personnalisées et personnalisables afin de donner vie à vos projets. <br/><br/>

                <span className="font-light text-xl bg-white rounded p-2 italic shadow shadow-5">Vous cherchez à captiver votre audience et à laisser une impression durable ?</span><br/><br/>

                 ACN est là pour vous. <br/><br/>
                 Notre équipe d&lsquo;experts passionnés maîtrise un large éventail de compétences, notamment la réalisation
                 de vidéos, le montage vidéo, le marketing digital, le sound design, le Motion Design, la prise de vidéos
                 et photos aériennes à l&lsquo;aide de drones professionnels, le développement informatique et
                 la création de sites et d&lsquo;applications web. <br/><br/>
                 Nous sommes également spécialisés dans la vérification de toitures, la réalisation de vidéos publicitaires
                 et la création de visites virtuelles pour les commerces. <br/><br/>

                Chez ACN, nous croyons en l&lsquo;importance de comprendre vos besoins spécifiques et de travailler en étroite
                 collaboration avec vous pour créer des contenus percutants et de haute qualité qui reflètent votre vision. <br/><br/>

                 Que vous soyez une start-up cherchant à se démarquer, une entreprise établie souhaitant renouveler son image
                 ou à la recherche d&lsquo;une solution web ou informatique sur mesure, nous sommes prêts à relever le défi
                 et à vous aider à atteindre de nouveaux sommets. <br/><br/>

                Laissez-nous transformer votre vision en une expérience inoubliable pour votre public. <br/>
                 Faites confiance à ACN pour vous propulser dans l&lsquo;univers du numérique et rejoignez dès aujourd&lsquo;hui
                 notre liste de clients satisfaits. <br/><br/>

                N&lsquo;attendez plus, <Link to="/Home"> contactez-nous</Link> et découvrez comment Atlante Création Numérique peut donner vie
                 à vos projets, développer votre présence en ligne et vous aider à marquer les esprits. <br/><br/>

                 Bienvenue dans le futur de la création numérique !
            </div>
        </div>
    );
};

export default About;