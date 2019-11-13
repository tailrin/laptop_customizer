import React from 'react';

class Total extends React.Component {
    static defaultProps = {
        total: ""
    }

    render(){
        return(
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.total}
              </div>
            </div>
        )
    }
}

export default Total;