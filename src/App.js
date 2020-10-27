import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* O list={ListGuesser} prop significa que react-admin deve usar o <ListGuesser>
    componente para exibir a lista de postagens. Este componente adivinha o 
    formato a ser usado para as colunas da lista com base nos dados buscados na API*/}
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
