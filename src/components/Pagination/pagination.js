import React from 'react';
import {mergeClasses} from '@magento/venia-ui/lib/classify';
import defaultClasses from './pagination.css';

const Pagination = props => {
    const {pages, currentPage} = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes}>
            <ul>

            </ul>
        </div>
    )
}

Pagination.propTypes = {
    pages: array,
    currentPage: number,
}

export default Pagination;