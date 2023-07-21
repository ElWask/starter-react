import './App.css';
import React, { useEffect, useState } from 'react';

const MARKETS_URL = 'https://a.c-dn.net/b/2Me8Xl.json';

async function processMarketsData(markets) {
  const groupedMarkets = markets.reduce((accumulator, item) => {
    accumulator[item.row] = accumulator[item.row] || [];
    accumulator[item.row][item.col] = item.value;
    return accumulator;
  }, []);
  return groupedMarkets;
}

function renderRow(row, isHeader) {
  return row.map((cellValue, index) => {
    const Element = isHeader ? 'th' : 'td';
    return <Element key={index}>{cellValue}</Element>;
  });
}

function App() {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');

  async function getMarketsData() {
    const markets = new Request(MARKETS_URL);
    const response = await fetch(markets);

    const { data } = await response.json();
    return data;
  }
  
  useEffect(() => {
    async function fetchData() {
      setError('')
      try {
        const markets = await getMarketsData();
        const processedRows = await processMarketsData(markets);
        setRows(processedRows);
      } catch (error) {
        setError('Failed to fetch data');
      }
    }

    fetchData();
  }, []);
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <table id="markets">
        <thead>
          <tr>
            {rows.length > 0 && renderRow(rows[0], true)}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, index) => (
            <tr key={index}>{renderRow(row, false)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
