import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';


describe('<CourseList />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).to.equal(true);
  });
  it('renders correctly if header and both text cells', () => {
    const wrapper = shallow(<CourseList />);
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
