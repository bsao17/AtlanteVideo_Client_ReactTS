import React from "react";
import {TitleCard} from "../components";
import {FunctionComponent} from "react";


const Product: FunctionComponent = ()=>{
    return (
        <div>
            <TitleCard title="Nos prestations"/>
            <div className="columns-3 m-5">
                <div className="hover:bg-gray-600 hover:border hover:border-white rounded-xl">
                    <h3 className="text-xl text-center text-white mb-3">Réalisation de vidéos</h3>
                    <div className="border border-white rounded-xl bg-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus dolorum exercitationem illum necessitatibus odit porro, possimus tempora vel voluptatibus. Ab aperiam autem blanditiis, consequuntur cupiditate dignissimos dolore eligendi eos esse eum id iure, labore laborum laudantium, magni maxime natus necessitatibus nostrum nulla quasi repellat saepe sint sit soluta voluptatibus?</div>
                </div>
                <div className="hover:bg-gray-600 hover:border hover:border-white rounded-xl">
                    <h3 className="text-xl text-center text-white mb-3">réalisation de site web/application</h3>
                    <div className="border border-white rounded-xl bg-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut beatae, consectetur dolor facere libero perferendis quae quis recusandae repudiandae tempore voluptatibus. Aspernatur distinctio in iste magni nobis obcaecati tenetur ut? Ad asperiores debitis dicta dolorem ducimus eaque harum laboriosam libero molestias perferendis, perspiciatis possimus quae quis quisquam repellat, sint?</div>
                </div>
                <div className="hover:bg-gray-600 hover:border hover:border-white rounded-xl">
                    <h3 className="text-xl text-center text-white mb-3">Motion Design</h3>
                    <div className="border border-white rounded-xl bg-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut delectus dignissimos dolores, esse eum facere ipsum molestiae, nam officiis quia quibusdam quis quos repellendus sapiente similique totam veritatis? Architecto deleniti distinctio doloribus dolorum est explicabo impedit sint sunt tempora ullam. Blanditiis quae, rem? Ad commodi corporis obcaecati perspiciatis similique soluta?</div>
                </div>
            </div>
        </div>
    );
};

export default Product;