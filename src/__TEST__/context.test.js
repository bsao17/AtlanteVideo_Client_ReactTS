import {Context} from "../context/Context";
import {render, fireEvent, screen} from "@testing-library/react";

describe("test du fonctionnement du context", () => {
    const contextMock = jest.fn(()=>Context.Consumer);
    it("Vérifier appel du context", () => {
        render(
            <Context.Provider value={contextMock.mock.valueOf()}>
                <a href="/#/" onClick={contextMock}>click me</a>
            </Context.Provider>
        );
        fireEvent.click(screen.getByText(/click me/));
        expect(contextMock).toHaveBeenCalled();
    });
    it("vérifier le contenu du context", () => {
        expect(contextMock.valueOf().toggleNavigation).toBeFalsy();
    });
});