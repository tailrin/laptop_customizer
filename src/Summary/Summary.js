import React from 'react';
import './Summary.css';
import SummaryItem from './SummaryItem/SummaryItem.js'
import Total from './Total/Total.js';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Summary extends React.Component{
    static defaultProps ={
        selected: {}
    };

    render(){
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return <SummaryItem featureHash={featureHash} feature={feature} selectedOption={selectedOption} key={featureHash}/>
        });
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total total={USCurrencyFormat.format(total)} key={total}/>
            </section>
        )
    }
}

export default Summary;