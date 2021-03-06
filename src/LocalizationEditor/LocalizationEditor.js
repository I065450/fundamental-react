import Button from '../Button/Button';
import classnames from 'classnames';
import FormInput from '../Forms/FormInput';
import FormLabel from '../Forms/FormLabel';
import FormTextArea from '../Forms/FormTextarea';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';


const LocalizationEditor = React.forwardRef(({ control, menu, id, compact, textarea, className, inputClassName, listProps, popoverProps,
    disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/localization-editor.css');
            require('fundamental-styles/dist/input-group.css');
        }
    }, []);

    const localizationEditorClasses = classnames(
        'fd-localization-editor',
        className
    );

    const localizationInputClasses = classnames(
        'fd-input-group__input',
        inputClassName
    );

    return (
        <div {...props} className={localizationEditorClasses}
            ref={ref}>
            <FormLabel
                {...control.labelProps}
                disableStyles={disableStyles}
                htmlFor={id}>
                {control.label}
            </FormLabel>
            <Popover
                {...popoverProps}
                body={
                    <Menu disableStyles={disableStyles}>
                        <Menu.List {...listProps}>
                            {menu.map((item, index) => {
                                let {
                                    inputProps,
                                    language,
                                    placeholder,
                                    ...itemProps
                                } = item;

                                return (
                                    <li {...itemProps}
                                        className='fd-menu__item'
                                        key={index}>
                                        <div className='fd-input-group fd-input-group--after'>
                                            {textarea ? (
                                                <FormTextArea
                                                    {...inputProps}
                                                    className={localizationInputClasses}
                                                    disableStyles={disableStyles} />
                                            ) : (
                                                <FormInput
                                                    {...inputProps}
                                                    className={localizationInputClasses}
                                                    compact={compact}
                                                    disableStyles={disableStyles}
                                                    placeholder={placeholder} />
                                            )}
                                            <span
                                                className='fd-input-group__addon fd-input-group__addon--button'>
                                                <Button
                                                    className='fd-input-group__button'
                                                    compact={compact}
                                                    disableStyles={disableStyles}
                                                    option='transparent'>
                                                    {language}
                                                </Button>

                                            </span>
                                        </div>
                                    </li>
                                );
                            })}
                        </Menu.List>
                    </Menu>
                }
                control={
                    <div className='fd-input-group fd-input-group--after'>
                        {textarea ? (
                            <FormTextArea
                                {...control.inputProps}
                                className={localizationInputClasses}
                                compact={compact}
                                disableStyles={disableStyles} />
                        ) : (
                            <FormInput
                                {...control.inputProps}
                                className={localizationInputClasses}
                                compact={compact}
                                disableStyles={disableStyles}
                                placeholder={control.placeholder} />
                        )}
                        <span
                            className='fd-input-group__addon fd-input-group__addon--button'>
                            <Button
                                {...control.buttonProps}
                                className='fd-input-group__button'
                                compact={compact}
                                disableStyles={disableStyles}
                                option='transparent'>
                                {control.language}
                            </Button>
                        </span>
                    </div>
                }
                disableKeyPressHandler
                disableStyles={disableStyles}
                id={id}
                noArrow />
        </div>
    );
});

LocalizationEditor.displayName = 'LocalizationEditor';

LocalizationEditor.propTypes = {
    /** A collection of properties to apply to the `<label>`, `<input>`/`<textarea>` and `<button>` elements. */
    control: PropTypes.shape({
        /** Additional props to be spread to the `<button>` element */
        buttonProps: PropTypes.object,
        /** Additional props to be spread to the `<input>` element */
        inputProps: PropTypes.object,
        /** Additional props to be spread to the `<label>` element */
        labelProps: PropTypes.object,
        /** Localized text for the `<label>` element */
        label: PropTypes.string,
        /** Localized placeholder text of the input */
        placeholder: PropTypes.string,
        language: PropTypes.string
    }).isRequired,
    /** An array of objects that represent the values of the elements in the dropdown menu. The shape of the objects in the array is `{ placeholder: string, language: string, inputProps: object }` */
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            /** Additional props to be spread to the `<input>` element */
            inputProps: PropTypes.object,
            /** Localized placeholder text of the input */
            placeholder: PropTypes.string,
            /** Text to display on the `<button>` element. Meant to be the language of the text in the `<input>`/`<textarea>` element */
            language: PropTypes.string
        }).isRequired
    ).isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** CSS class(es) to add to the `<input>` element */
    inputClassName: PropTypes.string,
    /** Additional props to be spread to the `<ul>` element */
    listProps: PropTypes.object,
    /** Additional props to be spread to the Popover component */
    popoverProps: PropTypes.object,
    /** Set to **true** to enable a Localization Editor with a textarea */
    textarea: PropTypes.bool
};

export default LocalizationEditor;
