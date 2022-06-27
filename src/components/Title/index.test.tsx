import React from 'react';

import {render, waitFor} from '@testing-library/react-native';

import Title from '.';

describe('<Title/>', () => {
  it('should render component with changing style', async () => {
    const {getByTestId} = render(<Title />);

    const titleWrapper = getByTestId('title-component');
    expect(titleWrapper).toHaveStyle({width: 10});

    await waitFor(() => {
      expect(titleWrapper).toHaveStyle({width: 15});
    });
  });
});
