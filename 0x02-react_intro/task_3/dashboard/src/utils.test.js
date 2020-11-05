import React from 'react';
const { getFullYear, getFooterCopy, getLatestNotification } = require('./utils');

test('Year returns 2020', () => {
  expect(getFullYear()).toBe("2020");
})

test('getFooterCopy works in both cases', () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
})

test('getLatestNotification works', () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})
