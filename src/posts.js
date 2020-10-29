import * as React from "react";
import { 
  Filter, 
  TextInput, 
  ReferenceInput, 
  List, 
  SelectInput, 
  Datagrid, 
  TextField, 
  ReferenceField, 
  EditButton 
} from 'react-admin';

const PostFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

export const PostList = props => (
  <List filters={<PostFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);