import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting', () => {
    test('render Hello World', () => {
        //Arrange
        render(<Greeting/>);

        //Act

        //Assert
        const greetingElement = screen.getByText('Hello World');

        expect(greetingElement).toBeInTheDocument();
    });

    test('render hello world and p element', () => {
        //arrange
        render(<Greeting/>);

        //act

        //assert
        const outputElem = screen.getByText('It\'s good to see you', {exact: false});

        expect(outputElem).toBeInTheDocument();
    });

    test('render change text button clicked', () => {
        //arrange
        render(<Greeting/>);

        //act
        const btnElem = screen.getByRole('button');
        userEvent.click(btnElem);

        //assert
        const outputElement = screen.getByText('Changed');

        expect(outputElement).toBeInTheDocument();
    });

    test('p element is hidden on button click', () => {
        //arrange
        render(<Greeting/>);

        //act
        const btnElem = screen.getByRole('button');
        userEvent.click(btnElem);

        //assert
        const outputElement = screen.queryByText('It\'s good to see you', {exact: false});
        expect(outputElement).toBeNull();
    });
});
