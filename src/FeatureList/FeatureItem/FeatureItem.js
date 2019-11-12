import slugify from 'slugify';
import React from 'react';
import './FeatureItem.css'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FeatureItem extends React.Component{
    static defaultProps = {
        item: {name: "", cost: 0},
        feature: ""
    }

    updateFeature = () =>{
        this.props.updateFeature(this.props.feature, this.props.item);
    }

    render(){
        const itemHash = slugify(JSON.stringify(this.props.item));
        return (
            <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(this.props.feature)}
              checked={this.props.item.name === this.props.selectedName}
              onChange={this.updateFeature}
            />
            <label htmlFor={itemHash} className="feature__label">
              {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
        );
    }

}

export default FeatureItem;