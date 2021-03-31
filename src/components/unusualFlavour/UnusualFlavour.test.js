import React from 'react';
import { render } from '../../test-utils';
import UnusualFlavour from './UnusualFlavour';

test('Tag renders with a correct tag label', () => {
  const { queryByText } = render(<UnusualFlavour />);

  expect(queryByText('🤩 Unusual Flavor')).toBeTruthy();
});
