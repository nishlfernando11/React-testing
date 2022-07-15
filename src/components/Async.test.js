import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('Async', () => {
    test('renders posts on success', async () => {
        //arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () =>[{id: 'p1', title: 'First post'}]
        });
        render(<Async/>);

        //act

        //assert
        const listItemElem = await screen.findAllByRole('listitem');
        expect(listItemElem).not.toHaveLength(0);

    });

});