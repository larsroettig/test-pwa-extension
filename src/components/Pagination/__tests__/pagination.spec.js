import React from 'react';
import Pagination from '../pagination';
import { render } from '@testing-library/react';

jest.mock('@magento/venia-ui/lib/classify');

test('renders correctly', () => {

    const { asFragment } = render(<Pagination pages={[]} currentPage={1} />);
    expect(asFragment()).toMatchSnapshot();
});