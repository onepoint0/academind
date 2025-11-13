import { useState } from "react"
import { calculateInvestmentResults } from "./util/investment";
import { DataInput } from "./components/DataInput";
import { ResultsTable } from "./components/ResultsTable";

const initialInputData = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
}

function App() {

  const [inputData, setInputData] = useState(initialInputData);

  const handleChange = (e, field) => {
    const value = e.target.value === '' ? 0 : Number(e.target.value)
    setInputData(prev => ({ ...prev, [field]: value }))
  };

  const results = calculateInvestmentResults(inputData);

  return (
    <main>
      <DataInput inputData={inputData} handleChange={handleChange} />
      <ResultsTable results={results} />
    </main>
  )
}

export default App;
