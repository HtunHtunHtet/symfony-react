import React  from 'react';
import propTypes from "prop-types";


export default function RepLogList(props) {

        const {highlightedRowId , onRowClick, repLogs, onDeleteRepLog} =  props;

        const handleDeleteClick = function (event, repLogId) {
            event.preventDefault();

            onDeleteRepLog(repLogId)
        }

        return (
            <tbody>
            {
                repLogs.map((repLog) => (
                        <tr
                            key={repLog.id}
                            className={highlightedRowId === repLog.id ? 'info' : ''}
                            onClick={() => onRowClick(repLog.id)}
                        >
                            <td>{repLog.itemLabel}</td>
                            <td>{repLog.reps}</td>
                            <td>{repLog.totalWeightLifted}</td>
                            <td>
                                <a href="#" onClick={(event) => handleDeleteClick(event, repLog.id)}>
                                    <span className="fa fa-trash"> </span>
                                </a>
                            </td>
                        </tr>
                    )
                )
            }
            </tbody>
        )
}


RepLogList.propTypes = {
    highlightedRowId : propTypes.any,
    onRowClick: propTypes.func.isRequired,
    repLogs: propTypes.array.isRequired,
    onDeleteRepLog : propTypes.func.isRequired
}
