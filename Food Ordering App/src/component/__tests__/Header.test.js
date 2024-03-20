import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../store/appStore.js";
import Header from "../Header.js";

it('Should load Header Component with a login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // 1st way :- This is a good way.
    const loginButton = screen.getByRole('button');

    // 2nd way
    // const loginButton = screen.getByText('Login');

    // When there is multiple button and want to test specific button
    // const loginButton = screen.getByRole('button', {name: 'Login'});

    expect(loginButton).toBeInTheDocument();
});

it('Should load Header Component with a Cart items 0', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText('Cart(0)');
    expect(cartItems).toBeInTheDocument();
});

it('Should load Header Component with a Cart item', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

it('Should change Login Button to Logout on click', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole('button', {name: 'Login'});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button', {name: 'Logout'});
    expect(logoutButton).toBeInTheDocument();
});
