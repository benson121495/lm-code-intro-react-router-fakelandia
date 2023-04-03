import { render, screen } from "@testing-library/react";
import Home from "./home";


describe("Testing for the Home Component Label", () => {

    test(`Tets the Home pages`, async () => {

        render(<Home />);

        const testHome = screen.getByText(/Welcome to the home of the Justice Department of Fakelandia/i);

        expect(testHome).toBeInTheDocument();
    
        });

    }
);