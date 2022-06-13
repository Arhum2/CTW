import React from 'react';

export const TableUi = ({ Calls }) => {
    return(
        <TableBody>
            {Calls.map(Call => {
                <Table.Row key={Call.volunteerName}>
                    <Table.HeaderCell>
                        {Call.volunteerName}
                    </Table.HeaderCell>
                </Table.Row>
            })}
        </TableBody>
    )
}


export default TableUi