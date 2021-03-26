import React, { useEffect } from 'react'
import { useField } from 'formik';
import { ResetMultiSelectOptionsType } from '../../../config/@types/Select';



const ResetMultiSelectOptions = (props: ResetMultiSelectOptionsType) => {
    const [field, _, helpers] = useField({ name: props.fieldName });

    useEffect(() => {
        if (
            field &&
            Array.isArray(field.value) &&
            field.value.length > 1 &&
            field.value.includes(props.uniqueValue)
        ) {
            helpers.setValue([props.uniqueValue]);
        }
    });
    return null;
};

export default ResetMultiSelectOptions