import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Home from "../Home.js";
import MOCK_DATA from '../mocks/ResListMock.json';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it('Should render the Body component with search button', async() => {
    await act(async() => render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    ));
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(102);

    const searchBtn = screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value: "cafe"}});
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);
});

it('Should filter Top Rated Restaurant', async() => {
    await act(async() => render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    ));
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(102);
    
    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(19);
});