import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import App from './App';

describe('App', () => {
  beforeAll(() => {
    fetchMock.resetMocks();
  });

  it('renders learn react link', () => {
    render(<App />);
    expect(screen.getByText(/hello IG/i)).toBeInTheDocument();
  });
});
