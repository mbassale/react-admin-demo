import * as React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, Datagrid, TextField, EmailField, SimpleList } from 'react-admin';
import SmartUrlField from './SmartUrlField';

export const UserList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ?
                (
                    <SimpleList primaryText={record => record.name} secondaryText={record => record.phone} tertiaryText={record => record.email} />
                ) : (
                    <Datagrid rowClick="edit">
                        <TextField source="id"/>
                        <TextField source="name"/>
                        <EmailField source="email"/>
                        <TextField source="phone"/>
                        <SmartUrlField source="website"/>
                        <TextField source="company.name"/>
                    </Datagrid>
                )
            }
        </List>
    );
};