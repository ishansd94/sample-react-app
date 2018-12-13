import React from 'react';

const TableBody = props => {

    const data = props.content.map((r, i) => {
        return (
            <tr key={i}>
                <td>{r.name}</td>
                <td>{r.job}</td>
                <td><button className="btn btn-danger" onClick={ () => props.removeItem(i) }>X</button></td>
            </tr>
        );
    });


    return (
        <tbody>
        {data}
        </tbody>
    );
};

export default TableBody;
