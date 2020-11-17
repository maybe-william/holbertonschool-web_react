import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape';


function CourseList(props) {
    let rows = props.listCourses.map((x) =>
        <CourseListRow key={x.id} isHeader={false} textFirstCell={x.name} textSecondCell={x.credit} />
    );
    if (props.listCourses.length <= 0) {
      rows = (<tr><td>No course available yet</td></tr>);
    }
    return (
        <table id="CourseList">
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
