import React from 'react';
import './SummaryItem.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class SummaryItem extends React.Component{
    static defaultProps = {
        featureHash: "",
        feature: "",
        selectedOption: {
            name: "",
            cost: 0
        },
    }

    render(){
        return (
            <div className="summary__option" key={this.props.featureHash}>
              <div className="summary__option__label">{this.props.feature} </div>
              <div className="summary__option__value">{this.props.selectedOption.name}</div>
              <div className="summary__option__cost">
                {USCurrencyFormat.format(this.props.selectedOption.cost)}
              </div>
            </div>
        );
    }
}

export default SummaryItem;