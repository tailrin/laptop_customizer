import React from 'react';
import FeatureList from './FeatureList/FeatureList.js';

class CustomizeForm extends React.Component {
    

    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => {
            return <FeatureList updateFeature={this.props.updateFeature.bind(this)} feature={feature} featureList={this.props.features[feature]} featureHash={feature + '-' + idx} selectedName={this.props.selected[feature].name} key={feature + '-' + idx}/>
        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default CustomizeForm;