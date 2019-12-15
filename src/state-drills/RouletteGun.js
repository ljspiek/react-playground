import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    };
    
   state = {
            chamber: null,
            spinningTheChamber: false,
   }

   componentWillUnmount() {
       clearTimeout(this.timeout)
   }
    

    pullTheTrigger = () => {
        console.log('props in pullTheTrigger', this.props)
        console.log('state in pullTheTrigger', this.state)
        // const timer = setTimeout(() => {
        //     console.log('timed out after 2 seconds')
        // }, 2000);
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)

            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
        
    }

    componentDidMount() {
        console.log('componentDidMount')

    }

    renderTriggerPullMessage() {
        const {chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger....'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!!'
        } else {
            return 'you\'re safe!'
        }
    }

    render() {
        console.log('render')
        return(
            <div>
                <p>{this.renderTriggerPullMessage()}</p>
                <button onClick={this.pullTheTrigger}>Pull the trigger!</button>
            </div>
        )
    }

}

export default RouletteGun




