import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = e => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        });
    };

    submitForm = e => {
        e.preventDefault();
        this.props.HandleSubmit(this.state);
        this.setState(this.initialState);
    };

    render() {

        return (
            <form className="form">

                <div className="form-group">
                    <label className="label">Name</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label className="label">Job</label>
                    <input type="text" name="job" className="form-control" value={this.state.job} onChange={this.handleChange}/>
                </div>

                <input type="submit" className="btn btn-success" value="Submit" onClick={this.submitForm}/>

            </form>
        );
    }
}

export default Form;