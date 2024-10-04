import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gamequery: GameQuery;
}

function GameHeading({ gamequery }: Props) {
  const heading = `${gamequery.genre?.name || " "} ${
    gamequery.platform?.name || " "
  } Games`;
  return (
    <>
      <Heading as="h1" marginY={5} fontSize="5xl">
        {heading}
      </Heading>
    </>
  );
}

export default GameHeading;
