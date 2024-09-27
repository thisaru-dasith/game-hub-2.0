import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="red">
        nav
      </GridItem>
      <Show above={"lg"}>
        <GridItem area="aside" bg="yellow">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="orange">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
