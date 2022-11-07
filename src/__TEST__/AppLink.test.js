import {render, screen} from "@testing-library/react";
import {Navigation} from "../components";

describe("vérifier la présence des liens et leur fonctionnement", () => {
    test("de la présence du lien accueil", () => {
        render(<Navigation/>);
        const Links = screen.getByRole("Link");
        expect(Links[0].textContent).toEqual("Accueil");
    });
    test("de la présence du lien service", () => {
        expect(screen.getByText("Services & Produits")).toBeInTheDocument();
    });
    /* test("de la présence du lien a propos", () => {
        const about = "A propos";
        expect(screen.getByText(about).toBeInTheDocument();
    });*/
});