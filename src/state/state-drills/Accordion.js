import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    }
    state = {
        currentTabIndex: 0
    };
    
    handleButtonClicks = (index) => {
        console.log('button clicked', {index} )
        this.setState({currentTabIndex: index})
    }


    renderButtons() {
        return (
            this.props.sections.map((tab, index) => (
                <li key={index}>
                    <button onClick = { () => {this.handleButtonClicks(index)} }>
                        {tab.title}
                    </button>
                </li>
            ))
        )
    }

    render() {
        return(
            <div>
                <ul>
                    {this.renderButtons()}
                </ul>
            </div>
        )
    }
};

export default Accordion;