import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const Skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={6}>
        {isLoading &&
          Skeleton.map((s) => <GameCardSkeleton key={s}></GameCardSkeleton>)}
        {error && <Text>{error}</Text>}
        {data.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
