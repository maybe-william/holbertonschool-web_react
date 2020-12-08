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
  });
  it('renders an img and an h1', () => {
  });
});
