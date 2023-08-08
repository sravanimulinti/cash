import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withDraw = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'

    return (
      <div className="bg">
        <div className="container">
          <div className="box">
            <div className="para-bg">
              <p className="">S</p>
            </div>
            <p className="para">{name}</p>
          </div>
          <div className="box1">
            <p className="para1">Your Balance</p>
            <p className="para">
              {balance}
              <br />
              <span className="para2">In Rupees</span>
            </p>
          </div>
          <p className="para">Withdraw</p>
          <p className="para1">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unOrder">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationDetails={eachItem}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
