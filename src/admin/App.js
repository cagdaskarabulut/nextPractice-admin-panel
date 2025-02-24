import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

const dataProvider = simpleRestProvider("/api/users");

const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="email" />
      <TextField source="avatarUrl" />
      <EditButton />
    </Datagrid>
  </List>
);

const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="avatarUrl" />
    </SimpleForm>
  </Edit>
);

const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="avatarUrl" />
    </SimpleForm>
  </Create>
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);

export default App;
