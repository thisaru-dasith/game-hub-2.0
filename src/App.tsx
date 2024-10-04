import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid.";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import GenresList from "./components/GenreList";
import PlatformSelectors from "./components/PlatformSelectors";
import { Platform } from "./hooks/useGames";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
}

function App() {
  const [gameQuery, setSelecetedGameQuery] = useState<GameQuery>(
    {} as GameQuery
  );

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
        <NavBar
          onSearch={(searchText) =>
            setSelecetedGameQuery({ ...gameQuery, searchText })
          }
        ></NavBar>
      </GridItem>
      <Show above={"lg"}>
        <GridItem area="aside" paddingX="5px">
          <GenresList
            onSelectedGenre={(genre) =>
              setSelecetedGameQuery({ ...gameQuery, genre })
            }
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gamequery={gameQuery} />
        <PlatformSelectors
          onSelectedPlatform={(platform) =>
            setSelecetedGameQuery({ ...gameQuery, platform })
          }
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
