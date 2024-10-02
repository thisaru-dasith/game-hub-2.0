import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Games } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import getCropImages from "../services/image-url";

interface Prop {
  game: Games;
}

function GameCard({ game }: Prop) {
  return (
    <>
      <Card width={"300px"} borderRadius={10} overflow="hidden">
        <Image src={getCropImages(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatFormIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatFormIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
