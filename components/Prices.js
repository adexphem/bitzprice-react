class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {
    return (
      <div>
        <select onChange={e => this.setState({currency: e.target.value})}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <ul>
          <li>
            Bitcoin Rate for {this.props.data.bpi[this.state.currency].description}: {this.props.data.bpi[this.state.currency].rate}
          </li>
        </ul>
      </div>
    );
  }
}

export default Prices;