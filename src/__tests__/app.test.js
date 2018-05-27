import React from 'react';
import renderer from 'react-test-renderer';

import App from '../components/App';
import { Provider } from 'react-redux';
import store from '../store';

test('Render of the whole app', () => {
  const component = renderer.create(
    <Provider store={store}>
        <App />
    </Provider>, 
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});