import React from "react";
import { TitleCard } from "../components";
import { FunctionComponent } from "react";

const Product: FunctionComponent = () => {
    return (
        <div>
            <TitleCard title="Nos prestations" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 my-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 border-2 border-transparent hover:border-primary transition duration-300 ease-in"
                    >
                        <h3 className="text-xl font-semibold text-center text-primary mb-4">
                            {service.title}
                        </h3>
                        <p className="text-justify text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const services = [
    {
        title: "Réalisation de vidéos",
        description:
        "✅ Réalisation (minimum une demi journée) ✅ Post-production ✅ Retouches" +
            "\n-> à partir de 450€ 1/2 journée"
    },
    {
        title: "Réalisation de site web et app-mobile",
        description:
        "lorem 10"
    },
    {
        title: "Motion Design",
        description:
        "lorem 10"
    },
];

export default Product;
