export const DataInput = ({ inputData, handleChange }) => {
  return (
    <div id="user-input">
      <div className="input-row">

        <div className="field-container">
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input type="number" name="initialInvestment" id="initialInvestment" min={0} value={inputData.initialInvestment} onChange={(e) => handleChange(e, 'initialInvestment')} />
        </div>

        <div className="field-container">
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input type="number" name="annualInvestment" id="annualInvestment" min={0} value={inputData.annualInvestment} onChange={(e) => handleChange(e, 'annualInvestment')} />
        </div>

      </div>
      <div className="input-row">

        <div className="field-container">
          <label htmlFor="expectedReturn">Expected Return</label>
          <input type="number" name="expectedReturn" id="expectedReturn" min={0} max={100} value={inputData.expectedReturn} onChange={(e) => handleChange(e, 'expectedReturn')} />
        </div>

        <div className="field-container">
          <label htmlFor="duration">Duration</label>
          <input type="number" name="duration" id="duration" step={1} min={0} value={inputData.duration} onChange={(e) => handleChange(e, 'duration')} />
        </div>

      </div>
    </div>
  )
}
