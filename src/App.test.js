import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';
import App from './App';

describe('App', () => {
  beforeAll(() => {
    fetchMock.resetMocks();
  });

  it('renders the table header and rows correctly', async () => {
    // Mock the response data
    const mockData = [
      { row: 0, col: 0, value: 'Header 1' },
      { row: 0, col: 1, value: 'Header 2' },
      { row: 1, col: 0, value: 'Cell 1' },
      { row: 1, col: 1, value: 'Cell 2' },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data: mockData }),
    });

    render(<App />);

    // Wait for data to be fetched and rendered
    await waitFor(() => screen.getByText('Header 1'));

    // Check if the table header and rows are rendered correctly
    expect(screen.getByText('Header 1')).toBeInTheDocument();
    expect(screen.getByText('Header 2')).toBeInTheDocument();
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Cell 2')).toBeInTheDocument();
  });

  it('handles errors during data fetching', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue('something went wrong');

    render(<App />);

    // Wait for the error message to be rendered
    await waitFor(() => screen.getByText('Error: Failed to fetch data'));

    // Check if the error message is displayed
    expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
  });
});
