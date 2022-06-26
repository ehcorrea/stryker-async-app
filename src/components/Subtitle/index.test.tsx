import React from 'react';

import {render, waitFor} from '@testing-library/react-native';

import Subtitle from '.';

describe('<Subtitle/>', () => {
  it('should render component with changing style', async () => {
    const {getByTestId} = render(<Subtitle />);

    const subtitleWrapper = getByTestId('subtitle-component');
    expect(subtitleWrapper).toHaveStyle({width: 10});

    await waitFor(() => {
      expect(subtitleWrapper).toHaveStyle({width: 15});
    });
  });
});
