import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody'


class Table extends Component {

    render() {

        return (
            <table className="table table-dark">
                <TableHeader headers={this.props.headers} />
                <TableBody
                    content={this.props.content}
                    removeItem={this.props.removeItem}
                />
            </table>
        );
    }
}

export default Table;