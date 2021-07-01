import Counter from './Counter';
import React from 'react';
import { render, fireEvent, waitFor, screen } from './utils/test-utils'
describe('click', () => {
    test('counter with click', () => {
        render(<Counter />);
    
        const click = screen.getByText(/Click me/i);
        const p = screen.getByRole('contentinfo');
        fireEvent.click(click);
        expect(p).toHaveTextContent(1);
    })

    test('counter with alert click', async () => {
        jest.useFakeTimers();

        render(<Counter />);
        const click = screen.getByText(/Click me/i);
        const alertClick = screen.getByText(/show alert/i);
        
        fireEvent.click(alertClick);
        fireEvent.click(click);
        fireEvent.click(click);
        fireEvent.click(click);
        
        expect(screen.getByRole('contentinfo')).toHaveTextContent(3);

        await waitFor(()=> {
            expect(screen.getByRole('contentinfo')).toHaveTextContent(0);
        })

        expect(screen.getByRole('contentinfo')).toHaveTextContent(0);

    })
})
