import App from "../App";
import {render, screen} from "@testing-library/react";

describe("vérifier la présence des lien et leurs fonctionnement", () => {
    beforeEach(()=>{
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<App/>)
    })
    test("de la présence du lien accueil", () => {
        expect(screen.getByText("Accueil")).toBeInTheDocument();
    })
    test("de la présence du lien service", () => {
        expect(screen.getByText("Services & produits")).toBeInTheDocument();
    })
    test("de la présence du lien a propos", () => {
        expect(screen.getByText("A propos")).toBeInTheDocument();
    })
})