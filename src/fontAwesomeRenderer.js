import React from 'react';
import {renderToString} from 'react-dom/server';
import {mergeClasses} from '@magento/venia-ui/lib/classify';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import {Component as PlainHtmlRenderer} from '@magento/venia-ui/lib/components/RichContent/plainHtmlRenderer';
import defaultClasses from '@magento/venia-ui/lib/components/RichContent/richContent.css';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function FontAwesomeRenderer(props) {
    const classes = mergeClasses(defaultClasses, props.classes);
    let html = props.html;
    const result = html.match(/:FontAwesome:[\w\d-]*/g);
    const iconTemplate = iconName =>
        renderToString(
            <div>
                <FontAwesomeIcon icon={iconName}/>
            </div>
        );

    // removes all duplicates
    result.filter((v, i) => result.indexOf(v) === i);
    result.forEach(match => {
        const iconName = match.replace(/:FontAwesome:/g, '');
        html = html.replace(new RegExp(match), iconTemplate(iconName));
    });

    return <PlainHtmlRenderer html={html} classes={classes}/>;
}
