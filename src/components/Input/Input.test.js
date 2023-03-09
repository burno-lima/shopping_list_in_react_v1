import { render, screen } from '@testing-library/react';
import Input from './Input';

test('name of label in input', () =>{
    render(<Input />);
    const nameInput = screen.getByText(/Valor/i);
    expect(nameInput).toBeInTheDocument();
})