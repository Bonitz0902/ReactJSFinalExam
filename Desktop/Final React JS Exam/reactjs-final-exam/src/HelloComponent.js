import React from 'react';
import './HelloComponent.css';

class TextBoxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            displayedText: '',
        };
    }

    handleInputChange = event => {
        this.setState({ inputText: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ displayedText: this.state.inputText });
    };

    render() {
        return (
            <div className="textbox-container">
                <p className="displayed-text">Enter your name: {this.state.displayedText}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            value={this.state.inputText}
                            onChange={this.handleInputChange}
                            className="textbox-input"
                        />
                    </label>
                    <button type="submit" className="submit-button">Submit</button>
                </form>

            </div>
        );
    }
}

export default TextBoxComponent;
