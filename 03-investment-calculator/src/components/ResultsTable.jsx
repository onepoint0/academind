import { formatter } from "../util/investment";

export const ResultsTable = ({ results }) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th> Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(r => <tr key={r.year}>
          <td>{r.year}</td>
          <td>{formatter.format(r.valueEndOfYear)}</td>
          <td>{formatter.format(r.interestEarnedInYear)}</td>
          <td>{formatter.format(r.totalInterest)}</td>
          <td>{formatter.format(r.investedCapital)}</td>
        </tr>)}
      </tbody>
    </table>
  )
}
