import * as React from 'react';
import Link from '@material-ui/core/Link';

const SmartUrlField = ({ record = {}, source }) => {
    const originalUrl = record[source];
    let url = originalUrl;
    if (!originalUrl.startsWith('https://') && !originalUrl.startsWith('http://')) {
        url = 'http://' + url;
    }
    return (
        <Link component="a" href={url} target="_blankd">{originalUrl}</Link>
    );
}

export default SmartUrlField;
