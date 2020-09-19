import * as React from 'react';

const TEXT_LIMIT = 48;

const SummaryField = ({ record = {}, source }) => {
    const text = record[source];
    if (text.length > TEXT_LIMIT) {
        return text.substr(0, TEXT_LIMIT) + '..';
    }
    return text;
}

export default SummaryField;
