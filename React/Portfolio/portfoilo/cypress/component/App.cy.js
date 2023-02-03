import { mount } from "cypress/react18";
import App from "../../src/App";
import "./../../src/dist/output.css";

Cypress.Commands.add("mount", mount);

describe("App.cy.js", () => {
    function isDark(elementToBeDark, elementClassName) {
        cy.get(document.documentElement).should("have.class", "dark");
        cy.get(elementToBeDark).should("have.class", elementClassName);
    }
    function isLight(elementToBeLight, elementToBeLightClassName) {
        cy.get(document.documentElement).should("not.have.class", "dark");
        cy.get(elementToBeLight).should(
            "have.class",
            elementToBeLightClassName
        );
    }

    function makeLight() {
        cy.get(document.documentElement).then((elem) => {
            if (elem.hasClass("dark")) {
                cy.get("[id='dark']").click();
                return;
            }
            return;
        });
    }
    function makeDark() {
        cy.get(document.documentElement).then((elem) => {
            if (elem.hasClass("dark")) {
            } else {
                cy.get("[id='dark']").click();
                return;
            }
            return;
        });
    }

    it("desctop playground light", () => {
        cy.mount(<App />);
        cy.viewport(1200, 620);
        makeLight();

        isLight("[id='fullAp']", "md:bg-[#eaeaea]");
    });

    it("desctop playground Dark", () => {
        cy.mount(<App />);
        cy.viewport(1200, 620);
        makeDark();

        isDark("[id='fullAp']", "md:dark:bg-[#212121]");
    });

    it("desctop text light", () => {
        cy.mount(<App />);
        cy.viewport(1200, 620);
        makeLight();

        isLight("[id='fullApp']", "md:dark:text-white");
    });

    it("desctop text Dark", () => {
        cy.mount(<App />);
        cy.viewport(1200, 620);
        makeDark();

        isDark("[id='fullApp']", "text-zinc-800");
    });

    it("small screen playground light", () => {
        cy.mount(<App />);
        cy.viewport(1200, 620);
        makeLight();
        cy.viewport(330, 668);

        isLight("[id='fullApp']", "bg-[#eaeaea]");
    });

    it("small screen playground dark", () => {
        cy.mount(<App />);
        cy.viewport(1200, 620);
        makeDark();
        cy.viewport(330, 668);

        isDark("[id='fullApp']", "bg-[#eaeaea]");
    });
});
