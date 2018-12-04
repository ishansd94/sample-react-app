import React, {Component} from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Headers: [
                "Name",
                "Job",
                "Delete"
            ],

            Content: [
                {
                    'name': 'Charlie',
                    'job': 'Janitor'
                },
                {
                    'name': 'Mac',
                    'job': 'Bouncer'
                },
                {
                    'name': 'Dee',
                    'job': 'Aspring actress'
                },
                {
                    'name': 'Dennis',
                    'job': 'Bartender'
                }
            ]

        }
    }

    handleSubmit = item => {
        this.setState({
            Content: [...this.state.Content, item],
        })
    };

    removeItem = index => {

        this.setState({
            Content: this.state.Content.filter((item, i)=>{
                return i !== index;
            })
        });

    };

    render() {
        return (
            <div className="App">
                <Table Headers={this.state.Headers} Content={this.state.Content} RemoveItem={this.removeItem}/>
                <Form HandleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;
