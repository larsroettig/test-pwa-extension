import React from 'react';
import {mergeClasses} from '@magento/venia-ui/lib/classify';
import defaultClasses from './pagination.css';
import { array, number } from 'prop-types';

const Pagination = props => {
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <h1>skkdwkwke</h1>
        </div>
    )
}

Pagination.propTypes = {
    pages: array,
    currentPage: number,
}

export default Pagination;