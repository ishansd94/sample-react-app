import React, {Component} from 'react';
import Table from "../Common/Table/Table";
import PersonForm from "./PersonForm";


class Persons extends Component{
    state = {
        headers: [
            "Name",
            "Job",
            "Delete"
        ],

        content: [
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
                'job': 'Aspiring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ]

    };

    handleSubmit = item => {
        this.setState({
            content: [...this.state.content, item],
        })
    };

    removeItem = index => {

        this.setState({
            content: this.state.content.filter((item, i)=>{
                return i !== index;
            })
        });

    };

    render() {
        return (
            <div className="App">
                <Table headers={this.state.headers} content={this.state.content} removeItem={this.removeItem}/>
                <PersonForm handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default Persons;