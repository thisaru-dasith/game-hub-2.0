import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Games } from "../hooks/useGames";
import PlatFormIconList from "./PlatFormIconList";

interface Prop {
  game: Games;
}

function GameCard({ game }: Prop) {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIconList>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
