import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    td: {
        padding: 5,
        fontWeight: "normal"
    },
    th: {
        padding: 5,
        fontWeight: "bold",
        borderBottom: "3px solid grey"
    },
    onlyChild: {
        padding: 5,
        fontWeight: "bold",
        borderBottom: "3px solid grey",
        textAlign: "center"
    }
});

function CourseListRow(props) {
    const rowStyle = {backgroundColor: "#f5f5f5ab"};
    const headStyle = {backgroundColor: "#deb5b545"};
    if (props.isHeader) {
        if (props.textSecondCell === null) {
            return (
                <tr style={headStyle}>
                    <th colSpan="2" className={css(styles.onlyChild)}>
                        {props.textFirstCell}
                    </th>
                </tr>
            );

        }

        return (
            <tr style={headStyle}>
                <th className={css(styles.th)}>
                    {props.textFirstCell}
                </th>
                <th className={css(styles.th)}>
                    {props.textSecondCell}
                </th>
            </tr>
        );

    }

    return (
        <tr style={rowStyle}>
            <td className={css(styles.td)}>
                {props.textFirstCell}
            </td>
            <td className={css(styles.td)}>
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
