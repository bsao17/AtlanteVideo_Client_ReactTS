import App from "../App";
import {render, screen} from "@testing-library/react";

describe("vérifier la présence des lien et leurs fonctionnement", () => {
    beforeEach(()=>{
        render(<App/>)
    })
    it("test de la présence du lien accueil", () => {
        const home = screen.getByText("Accueil");
        expect(home).toBeInTheDocument();
    })
})