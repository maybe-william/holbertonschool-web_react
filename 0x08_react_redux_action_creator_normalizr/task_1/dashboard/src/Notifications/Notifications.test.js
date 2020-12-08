import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });
  it('renders a list with one item by default', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("ul")).to.have.lengthOf(1);
    expect(wrapper.find("li")).to.have.lengthOf(1);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(0);
  });
  it('renders description text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').at(1).text()).to.equal('Here is the list of notifications');
  });
  it('renders description text about empty notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('li').text()).to.equal('No new notification for now');
  });
  it('has a close button', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });


  it('has the menuItem div when display is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div')).to.have.lengthOf(1);
  });
  it('does not have the Notifications div when display is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications')).to.have.lengthOf(0);
  });
  it('has the Notifications div when display is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).to.have.lengthOf(0);
  });


  it('renders a list with two items when passed two items', () => {
    const nots = [
      {id: 1, type: "default", value: "x"},
      {id: 2, type: "default", value: "y"}
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={nots} />);
    expect(wrapper.find("ul")).to.have.lengthOf(1);
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(2);
  });
});
