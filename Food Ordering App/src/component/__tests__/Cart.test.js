import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../store/appStore.js';
import Cart from '../Cart.js';
import Header from '../Header.js';
import RestaurantCardDetails from '../card/RestaurantCardDetails.js';
import MOCK_DATA from '../mocks/ResItemMock.json';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it('Should load Restaurant Menu component', async() => {
    await act(async() => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
                <RestaurantCardDetails />
                <Cart />
            </Provider>
        </BrowserRouter>
    ));
    const accordionHeader = screen.getByText('Chinese (3)');
    fireEvent.click(accordionHeader);
    const items = screen.getAllByTestId('foodItems');
    expect(items.length).toBe(3);

    const addBtn = screen.getAllByRole("button", {name: "Add"});
    fireEvent.click(addBtn[0]);
    const cartItem1 = screen.getByText("Cart(1)");
    expect(cartItem1).toBeInTheDocument();

    fireEvent.click(addBtn[1]);
    const cartItem2 = screen.getByText("Cart(2)");
    expect(cartItem2).toBeInTheDocument();
    
    const cart = screen.getAllByTestId('foodItems');
    expect(cart.length).toBe(3);

    const clearCart = screen.getByRole('button', {name: 'Clear Cart'});
    fireEvent.click(clearCart);
    expect(cart.length).toBe(3);

    const text = screen.getByText('No items in your cart.');
    expect(text).toBeInTheDocument();
});
