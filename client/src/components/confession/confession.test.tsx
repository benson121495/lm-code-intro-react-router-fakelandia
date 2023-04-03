import { render , screen } from "@testing-library/react";
import Confession from './confession';


describe("Testing for the Confession Component Label", () => {

    test(`Test the confession pages`, async () => {


        render(<Confession />);

        const linkElementTitle = screen.getByText(/confession/i);
        expect(linkElementTitle).toBeInTheDocument();
        const linkElementSubject = screen.getByText(/subject/i);
        expect(linkElementSubject).toBeInTheDocument();
        const linkElementContact = screen.getByText(/reason for contact /i);
        expect(linkElementContact).toBeInTheDocument();
    
        });

    }
);