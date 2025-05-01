import React from "react";
import styles from "./Cryptotable.module.css";

const Cryptotable = ({ data = [] }) => {
  console.log(data);

  return (
    <div
      className={`container mt-4 shadow-lg p-3 bg-white rounded ${styles.cryptotable}`}
    >
      <h2 className="text-center text-primary">Top Cryptocurrencies</h2>
      <table className="table no-border table-hover">
        <thead className="table-light">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Market Cap</th>
            <th>Volume (24Hr)</th>
            <th>Change (24Hr)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto, index) => {
            return (
              <tr key={crypto.id}>
                <td>{crypto.rank}</td>
                <td>
                  {crypto.name} ({crypto.symbol})
                </td>
                <td>{  Number(crypto.priceUsd).toFixed(2)   }</td>
                <td>{Number(crypto.marketCapUsd).toFixed(2)}</td>
                <td>{Number(crypto.volumeUsd24Hr).toFixed(2)}</td>
                <td
                  className={
                    Number(crypto.changePercent24Hr) > 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {(Number(crypto.changePercent24Hr)* 100).toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cryptotable;
