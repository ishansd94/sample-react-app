import React, {Component} from 'react';

const TableHeader = props => {

    const headers = props.Headers.map((r, i) => {
        return (
            <th key={i}>
                {r}
            </th>
        );
    });

    return (
        <thead>
            <tr>
                {headers}
            </tr>
        </thead>
    );
};


const TableBody = props => {

    const data = props.Data.map((r, i) => {
        return (
            <tr key={i}>
                <td>{r.name}</td>
                <td>{r.job}</td>
                <td><button className="btn btn-danger" onClick={ () => props.RemoveItem(i) }>X</button></td>
            </tr>
        );
    });


    return (
        <tbody>
            {data}
        </tbody>
    );
};


class Table extends Component {

    render() {

        return (
            <table className="table table-dark">
                <TableHeader Headers={this.props.Headers} />
                <TableBody
                    Data={this.props.Content}
                    RemoveItem={this.props.RemoveItem}
                />
            </table>
        );
    }
}

export default Table;