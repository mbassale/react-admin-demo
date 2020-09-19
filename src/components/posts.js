import * as React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
    Filter,
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Create,
    Edit,
    SimpleList,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput
} from 'react-admin';
import SummaryField from './SummaryField';

const PostTitle = ({ record }) => (<span>{record ? `Post: ${record.title}` : ''}</span>);

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={<PostFilter/>} {...props}>
            {isSmall ? (
                <SimpleList primaryText={record => record.title} secondaryText={record => <SummaryField record={record} source="body" />} />
            ): (
                <Datagrid rowClick="edit">
                    <TextField source="id"/>
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name"/>
                    </ReferenceField>
                    <TextField source="title"/>
                    <SummaryField source="body"/>
                    <EditButton/>
                </Datagrid>
            )
            }
        </List>
    );
};

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Create>
);

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Edit>
);