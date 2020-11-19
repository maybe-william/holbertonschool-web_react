import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';


describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).to.equal(true);
  });
  it('renders correctly given dummy type prop', () => {
    const wrapper = shallow(<NotificationItem type="dummy_type" value="dummy_value"/>);
    expect(wrapper.props()).to.have.property('data-notification-type','dummy_type');
    expect(wrapper.text()).to.equal('dummy_value');
  });
  it('renders correctly given dummy value prop', () => {
    const wrapper = shallow(<NotificationItem type="dummy_type" value="dummy_value"/>);
    expect(wrapper.text()).to.equal('dummy_value');
  });
  it('renders correctly given dummy html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).to.contain('<u>test</u>');
  });
});
