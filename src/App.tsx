import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid.";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import GenresList from "./components/GenreList";
import PlatformSelectors from "./components/PlatformSelectors";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above={"lg"}>
        <GridItem area="aside" paddingX="5px">
          <GenresList
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelectors />
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
