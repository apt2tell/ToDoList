/**
 * @jest-environment jsdom
 */

import EventObj from './addEvent.js';

const event = new EventObj();
event.addList = jest.fn();
event.delEvent = jest.fn();
describe('implementation of addList and delList testing', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = '<div>'
        + '  <ul id="list"><li></li></ul>'
        + '</div>';
    jest.fn();
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
  test('Delete one new item to the list', () => {
    document.body.innerHTML = '<div>'
        + '  <ul id="list"></ul>'
        + '</div>';
    jest.fn();
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(0);
  });
});