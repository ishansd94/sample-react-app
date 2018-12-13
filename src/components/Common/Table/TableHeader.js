import React from 'react';

const TableHeader = props => {

    const headers = props.headers.map((r, i) => {
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

export default TableHeader;