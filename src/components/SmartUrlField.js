import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none'
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2
    }
})

const SmartUrlField = ({ record = {}, source }) => {
    const classes = useStyles();
    const originalUrl = record[source];
    let url = originalUrl;
    if (!originalUrl.startsWith('https://') && !originalUrl.startsWith('http://')) {
        url = 'http://' + url;
    }
    return (
        <Link component="a" href={url} target="_blank" className={classes.link}>
            {originalUrl}
            <LaunchIcon className={classes.icon} />
        </Link>
    );
}

export default SmartUrlField;
