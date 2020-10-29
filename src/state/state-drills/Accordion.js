import React from 'react';

class Accordion extends React.Component {
        
    static defaultProps = {
        sections: [],
    }
    state = {
        currentTabIndex: null,
    };
    
    handleButtonClicks = (index) => {
        console.log('button clicked', {index} )
        this.setState({currentTabIndex: index})
    }
    renderButtons() {
        return (
            this.props.sections.map((tab, index) => (
                <li key={index}>
                    <button key={index} onClick = { () => {this.handleButtonClicks(index)} }>
                        {tab.title}
                        
                    </button>
                    {this.state.currentTabIndex === index ? this.renderContent() : ""}
                </li>
            ))
        )
    }

    renderContent() {
        const currentTab = this.props.sections[this.state.currentTabIndex]
        return(
            <div className="content">
                {currentTab.content}
            </div>
            
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