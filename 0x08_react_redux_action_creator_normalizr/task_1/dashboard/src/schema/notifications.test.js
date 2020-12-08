import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { getAllNotificationsByUser, normalizedNotifications } from './notifications';

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

describe('normalizedNotifications', () => {

  it('has correct result', () => {
    let expected = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b"
    ];
    expected.sort();
    expected = expected.toString();

    let actual = [...normalizedNotifications.result];
    actual.sort();
    actual = actual.toString();

    expect(actual).to.equal(expected);
  });

  it('has correct user result', () => {
      const user = normalizedNotifications.entities.users['5debd764a7c57c7839d722e9'];
      expect(user.age).to.equal(25);
      expect(user.email).to.equal('poole.sanders@holberton.nz');
      expect(user.id).to.equal('5debd764a7c57c7839d722e9');
      expect(user.name.first).to.equal('Poole');
      expect(user.name.last).to.equal('Sanders');
      expect(user.picture).to.equal('http://placehold.it/32x32');
  });

  it('has correct message result', () => {
      const message = normalizedNotifications.entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41'];
      expect(message.guid).to.equal('efb6c485-00f7-4fdf-97cc-5e12d14d6c41');
      expect(message.isRead).to.equal(false);
      expect(message.type).to.equal("default");
      expect(message.value).to.equal("Cursus risus at ultrices mi.");
  });

  it('has correct notification result', () => {
      const n = normalizedNotifications.entities.notifications['5debd7642e815cd350407777'];
      expect(n.id).to.equal('5debd7642e815cd350407777');
      expect(n.context).to.equal("3068c575-d619-40af-bf12-dece1ee18dd3");
      expect(n.author).to.equal("5debd764f8452ef92346c772");
  });

});
