import React from 'react';
import './Accordian.css';

class Accordian extends React.Component {
    static defaultProps = {
        sections: [],
    }

    state = {
        currentSectionIndex: ""
    }

    handleSectionClick(index) {
        console.log('section button clicked', {index})
        this.setState({currentSectionIndex: index})
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    renderSections() {
        console.log('renderSections ran')
        
        return this.props.sections.map((sections, index) => (
            <li key={index}>
                <button  onClick={() =>this.handleSectionClick(index)}>
                {sections.title}
                </button>
                {(index === this.state.currentSectionIndex)&&this.renderContent(index)}
            </li>
        
        ))
    }

    renderContent(index) {
        const currentSection = this.props.sections[index]
        return (
            <p className='content'>
                {currentSection.content}
            </p>
        )
    }

    render () {
        return (
            <div>
                <ul>
                    {this.renderSections()} 
                    {/* <div>{this.renderContent()}</div> */}
                </ul>
                
               
            </div>
        )
    }
}

export default Accordian