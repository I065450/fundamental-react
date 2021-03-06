import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormMessage = React.forwardRef(({ type, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/form-message.css');
        }
    }, []);

    const formMessageClasses = classnames(
        'fd-form-message',
        {
            [`fd-form-message--${type}`]: !!type
        },
        className
    );
    return (
        <div
            {...props}
            aria-live='assertive'
            className={formMessageClasses}
            ref={ref}
            role='alert'>
            {children}
        </div>
    );
});

FormMessage.displayName = 'FormMessage';

FormMessage.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Sets the variation of the component. Primarily used for styling */
    type: PropTypes.oneOf(FORM_MESSAGE_TYPES)
};

export default FormMessage;
