import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import Contact from "../Contact.js";

describe('Contact Us Page Test Case', () => {
    beforeAll(() => {
        console.log('Before All');
    });

    beforeEach(() => {
        console.log('Before Each');
    });

    afterAll(() => {
        console.log('After All');
    });

    afterEach(() => {
        console.log('After Each');
    });

    test('Should load contact us component', () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test('Should load button inside Contact component', () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test('Should load submit text inside Contact component', () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });
    
    test('Should load input name inside Contact component', () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Enter your name");
        expect(inputName).toBeInTheDocument();
    });
    
    test('Should load 4 input boxes inside Contact component', () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(4);
    });
});

/*
    1) There are many test function in a single page.
    2) There are many describe function in a single page and it can be nested i.e. one describe function into another
        describe function.
    3) Instead of test keyword can write it keyword also.
*/