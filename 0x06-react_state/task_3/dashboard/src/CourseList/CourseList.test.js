import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('<CourseList />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).to.equal(true);
  });

  it('renders correctly if nothing passed in', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(2);

    expect(wrapper.find(CourseListRow).at(0).html()).to.contain('Available courses');

    expect(wrapper.find(CourseListRow).at(1).html()).to.contain('Course name');
    expect(wrapper.find(CourseListRow).at(1).html()).to.contain('Credit');
  });

  it('renders gives the correct message if nothing passed in', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("td").html()).to.contain('No course available yet');
  });

  it('renders correctly if header and both text cells are passed in as array', () => {
    const courses = [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40},
    ];

    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find(CourseListRow)).to.have.lengthOf(5);

    expect(wrapper.find(CourseListRow).at(0).html()).to.contain('Available courses');

    expect(wrapper.find(CourseListRow).at(1).html()).to.contain('Course name');
    expect(wrapper.find(CourseListRow).at(1).html()).to.contain('Credit');

    expect(wrapper.find(CourseListRow).at(2).html()).to.contain('ES6');
    expect(wrapper.find(CourseListRow).at(2).html()).to.contain('60');

    expect(wrapper.find(CourseListRow).at(3).html()).to.contain('Webpack');
    expect(wrapper.find(CourseListRow).at(3).html()).to.contain('20');

    expect(wrapper.find(CourseListRow).at(4).html()).to.contain('React');
    expect(wrapper.find(CourseListRow).at(4).html()).to.contain('40');
  });
});
