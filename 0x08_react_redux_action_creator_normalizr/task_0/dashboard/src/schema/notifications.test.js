import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import getAllNotificationsByUser from './notifications';

describe('getAllNotificationsByUser', () => {
  it('gets the correct contexts', () => {
      const answer = getAllNotificationsByUser('5debd764a7c57c7839d722e9');
      expect(answer.length).to.equal(2);
      expect(answer[0].guid).to.equal('2d8e40be-1c78-4de0-afc9-fcc147afd4d2');
      expect(answer[1].guid).to.equal('280913fe-38dd-4abd-8ab6-acdb4105f922');
  });
  it('gives empty contexts if wrong id given', () => {
      const wrong = getAllNotificationsByUser('45');
      expect(wrong.length).to.equal(0);
  });
});
