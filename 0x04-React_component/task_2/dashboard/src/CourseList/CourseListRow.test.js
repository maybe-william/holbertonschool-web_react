import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';


describe('<CourseListRow />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test0" />);
    expect(wrapper.exists()).to.equal(true);
  });
  it('renders with colspan of 2 if header and only one text cell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1"/>);
    expect(wrapper.find('th').props()).to.have.property('colSpan','2');
    expect(wrapper.find('th').text()).to.equal('test1');
  });
  it('renders correctly if header and both text cells', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test2" textSecondCell="test2" />);
    expect(wrapper.find('th')).to.have.lengthOf(2);
    expect(wrapper.find('th').first().text()).to.equal('test2');
    expect(wrapper.find('th').last().text()).to.equal('test2');
  });
  it('renders correctly if not header', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test3" textSecondCell="test3" />);
    expect(wrapper.find('td')).to.have.lengthOf(2);
    expect(wrapper.find('td').first().text()).to.equal('test3');
    expect(wrapper.find('td').last().text()).to.equal('test3');
  });
});
