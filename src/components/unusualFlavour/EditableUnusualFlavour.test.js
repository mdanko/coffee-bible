import React from 'react';
import { render } from '../../test-utils';
import { fireEvent } from '@testing-library/react';
import EditableUnusualFlavour from './EditableUnusualFlavour';

test('Checkbox renders correctly checked', () => {
  const onChange = jest.fn();
  const { rerender, container } = render(
    <EditableUnusualFlavour value={true} onChange={onChange} />
  );
  const checkbox = container.querySelector('input');

  expect(checkbox).toBeChecked();

  rerender(<EditableUnusualFlavour value={false} onChange={onChange} />);

  expect(checkbox).not.toBeChecked();
});

test('EditableUnusualFlavour correctly handles change', () => {
  const onChange = jest.fn();
  const { container } = render(
    <EditableUnusualFlavour value={false} onChange={onChange} />
  );

  fireEvent.click(container.querySelector('input'));

  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(true);
});
