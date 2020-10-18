import React from 'react';
import Pagination from '../pagination';
import { createTestInstance } from '@magento/peregrine';

jest.mock('@magento/venia-ui/lib/classify');

test('renders correctly', () => {
    const component = createTestInstance(
        <Pagination pageControl={pageControl} />
    );
    expect(component.toJSON()).toMatchSnapshot();
});