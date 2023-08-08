import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const withDraw = () => {
    updateBalance(value)
  }
  return (
    <li className="bg-1">
      <button type="button" className="btn" onClick={withDraw}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
