## Componente Resource

Mapeia um endpoint da API para uma interface CRUD, permite definir como sera cada operacao crud no recurso, tendo como props: list, create, edit, show.

## Componente ListGuesser

O componentEste componente adivinha o formato a ser usado para as colunas da lista com base nos dados buscados na API, o interessante que ele gera no console log qual foi o formato encontrado para ser utilizado. 

## Reference Field

O componente <ReferenceField> sozinho não exibe nada. Ele apenas busca os dados de referência e os passa como um registro para seu componente filho (um <TextField> em nosso caso). Assim como o componente <List>, todos os componentes <Reference> são responsáveis ​​apenas por buscar e preparar os dados e delegar a renderização a seus filhos.

## Styles

No JSS, você define estilos como um objeto JavaScript, usando as variantes JS dos nomes de propriedade CSS (por exemplo, textDecoration em vez de text-decoration). Para passar esses estilos para o componente, use makeStyles para construir um gancho React. O gancho criará novos nomes de classes para esses estilos e retornará os novos nomes de classes no objeto de classes.

## Renderização Otimista

Quando um usuário edita um registro e clica no botão “Salvar”, a IU mostra uma confirmação e exibe os dados atualizados antes de enviar a consulta de atualização para o servidor. O principal benefício é que as mudanças na interface do usuário são imediatas - não há necessidade de esperar pela resposta do servidor. É um grande conforto para os usuários.