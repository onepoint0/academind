import { useState } from "react"
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const results = calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration });
  console.log('res = ', results);
  return (
    <main>
      <div id="user-input">
        <div className="input-row">

          <div className="field-container">
            <label htmlFor="initialInvestment">Initial Investment</label>
            <input type="number" name="initialInvestment" id="initialInvestment" min={0} value={initialInvestment} onChange={(e) => setInitialInvestment(e.target.value)} />
          </div>

          <div className="field-container">
            <label htmlFor="annualInvestment">Annual Investment</label>
            <input type="number" name="annualInvestment" id="annualInvestment" min={0} value={annualInvestment} onChange={(e) => setAnnualInvestment(e.target.value)} />
          </div>

        </div>
        <div className="input-row">

          <div className="field-container">
            <label htmlFor="expectedReturn">Expected Return</label>
            <input type="number" name="expectedReturn" id="expectedReturn" min={0} max={100} value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} />
          </div>

          <div className="field-container">
            <label htmlFor="duration">Duration</label>
            <input type="number" name="duration" id="duration" step={1} min={0} value={duration} onChange={(e) => setDuration(e.target.value)} />
          </div>

        </div>
      </div>
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
          {results.map(r => <tr>
            <td>{r.year}</td>
            <td>{initialInvestment + annualInvestment + r.interest}</td>
            <td>{r.interest}</td>
            <td>{r.interest}</td>
            <td>{initialInvestment + annualInvestment}</td>
          </tr>)}
        </tbody>
      </table>
    </main>
  )
}

export default App;
