import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    table: {
        textAlign: "left",
        margin: 10,
        border: "1px solid lightgrey",
        width: "100%"
    }
});


function CourseList(props) {
    let rows = props.listCourses.map((x) =>
        <CourseListRow key={x.id} isHeader={false} textFirstCell={x.name} textSecondCell={x.credit} />
    );
    if (props.listCourses.length <= 0) {
      rows = (<tr><td>No course available yet</td></tr>);
    }
    return (
        <table id="CourseList" className={css(styles.table)}>
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

export default CourseList;
