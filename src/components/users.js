import * as React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import SmartUrlField from './SmartUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <SmartUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);