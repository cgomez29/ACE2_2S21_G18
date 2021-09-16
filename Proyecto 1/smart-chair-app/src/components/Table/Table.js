import PropTypes from 'prop-types';
import './table.css';

export const Table = ({ columns, rows }) => {
    return (
        <>
            <table className="content-table">
                <thead>
                    <tr>
                        {columns.map((data, index) => (
                            <th key={index}>{data.headerName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((data, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <th>{data.proximidad}</th>
                            <th>{data.peso}</th>
                            <th>{data.fecha}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
Table.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
};
