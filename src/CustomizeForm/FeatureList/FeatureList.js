
import React from 'react';
import FeatureItem from './FeatureItem/FeatureItem.js';
import './FeatureList.css'


class FeatureList extends React.Component{
    static defaultProps = {
        featureList: [],
        featureHash: "",
        selectedName: "",
        feature: "",
        updateFeature: function(){}
    }
    
    render(){
        const featureHash = this.props.featureHash;
        const options = this.props.featureList.map((item, i) => {
            return <FeatureItem item={item} feature={this.props.feature} updateFeature={this.props.updateFeature.bind(this)} selectedName={this.props.selectedName} key={i}/>  
        });
        return (
            <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
                <h3>{this.props.feature}</h3>
            </legend>
            {options}
            </fieldset>
        );
    }
}

export default FeatureList;

