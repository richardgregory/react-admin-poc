import { Datagrid, List, TextField, EditButton, Edit, SimpleForm, TextInput, SaveButton, Toolbar, ToolbarProps } from 'react-admin';

export const EventList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="type" />
            <TextField source="eventName" />
            <TextField source="description" />
            <EditButton />
        </Datagrid>
    </List>
);

const EventEditToolbar = (props: ToolbarProps) => (
    <Toolbar {...props}>
        <SaveButton />
    </Toolbar>
)

export const EventEdit = () => (
    <Edit>
        <SimpleForm toolbar={<EventEditToolbar />}>
            <TextInput source="id" disabled />
            <TextInput source="type" disabled />
            <TextInput source="eventName" disabled />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
)