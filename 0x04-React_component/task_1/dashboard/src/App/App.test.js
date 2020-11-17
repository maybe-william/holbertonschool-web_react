import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import chai from 'chai';
import chaiJestMock from 'chai-jest-mocks';

chai.use(chaiJestMock);


describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  it('renders a Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).to.have.lengthOf(1);
  });
  it('renders a Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });
  it('renders a Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).to.have.lengthOf(1);
  });
  it('renders a Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).to.have.lengthOf(1);
  });

  it('does not render a CourseList component by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).to.have.lengthOf(0);
  });
  it('does render a CourseList component if logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).to.have.lengthOf(1);
  });
});


describe('The logOut functionality', () => {
  it('gets called, and alerts with the correct string', () => {
    const myLogOut = jest.fn(() => undefined);
    const myAlert = jest.spyOn(global, 'alert');

    const wrapper = shallow(<App logOut={myLogOut} />)

    expect(myAlert);
    expect(myLogOut);
    jest.restoreAllMocks();
  });
});
