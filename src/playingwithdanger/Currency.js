import React from 'react'
import { render } from 'enzyme'

class Currency extends React.Component {
    render() {
        const money = new Intl
            .NumberFormat(this.props.locale,
                {
                    style: 'currency',
                    currency: this.props.currency
                })
            .format(this.props.value);
        return(
            <div className="currency">
                { money }
            </div>

        )
    }
}

export default Currency;