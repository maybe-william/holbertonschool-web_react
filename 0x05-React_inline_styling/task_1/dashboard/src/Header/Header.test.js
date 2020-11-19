import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });
  it('renders an img and an h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img")).to.have.lengthOf(1);
    expect(wrapper.find("h1")).to.have.lengthOf(1);
  });
});
