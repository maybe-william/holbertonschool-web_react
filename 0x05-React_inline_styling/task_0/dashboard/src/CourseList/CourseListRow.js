import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
    const rowStyle = {backgroundColor: "#f5f5f5ab"};
    const headStyle = {backgroundColor: "#deb5b545"};
    if (props.isHeader) {
        if (props.textSecondCell === null) {
            return (
                <tr style={headStyle}>
                    <th colSpan="2">
                        {props.textFirstCell}
                    </th>
                </tr>
            );

        }

        return (
            <tr style={headStyle}>
                <th>
                    {props.textFirstCell}
                </th>
                <th>
                    {props.textSecondCell}
                </th>
            </tr>
        );

    }

    return (
        <tr style={rowStyle}>
            <td>
                {props.textFirstCell}
            </td>
            <td>
                {props.textSecondCell}
            </td>
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
};

export default CourseListRow;
