import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Games } from "../hooks/useGames";

interface Prop {
  game: Games;
}

function GameCard({ game }: Prop) {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
