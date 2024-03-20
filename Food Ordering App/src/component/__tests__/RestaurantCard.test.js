import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../card/RestaurantCard.js";
import MOCK_DATA from '../mocks/ResCardMock.json';

it('Should render RestaurantCard component with props Data', () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText('The Coorg Food Co.');
    expect(name).toBeInTheDocument();
});