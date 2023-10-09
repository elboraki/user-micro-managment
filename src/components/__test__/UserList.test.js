import React from 'react';
import {shallow } from 'enzyme';
import UserList from '../UserList';

describe('UserList Components', () => {
  it('renders user cards', async () => {
    const wrapper = shallow(<UserList />);

    // Assert that the component has rendered as expected
    expect(wrapper.find('Fragment')).toHaveLength(1); // Replace with the expected number of cards
  });
});
