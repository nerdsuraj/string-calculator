import { render, screen, fireEvent } from '@testing-library/react';
import StringCal from './stringCal';
import { describe, it, expect } from 'vitest';

describe('StringCal UI', () => {
  it('should render input and button', () => {
    render(<StringCal />);
    expect(screen.getAllByPlaceholderText(/enter numbers/i)[0]).toBeDefined();
    expect(screen.getAllByTestId('calculate-btn')[0]).toBeDefined();
  });

  it('should show result on valid input', () => {
    render(<StringCal />);
    fireEvent.change(screen.getAllByPlaceholderText(/enter numbers/i)[0], {
      target: { value: '1,2' },
    });
    fireEvent.click(screen.getAllByTestId('calculate-btn')[0]);
    expect(screen.getByText(/result/i)).toHaveTextContent('3');
  });

  it('should show error on negative numbers', () => {
    render(<StringCal />);
    fireEvent.change(screen.getAllByPlaceholderText(/enter numbers/i)[0], {
      target: { value: '1,-2,-3' },
    });
    fireEvent.click(screen.getAllByTestId('calculate-btn')[0]);
    expect(screen.getByText(/error/i)).toHaveTextContent(
      'negative numbers not allowed -2,-3'
    );
  });
});
