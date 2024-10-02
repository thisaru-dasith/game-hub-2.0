import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 65 ? "yellow" : "";
  return (
    <>
      <Badge
        colorScheme={color}
        fontSize={"14px"}
        paddingX={2}
        borderRadius={"5px"}
      >
        {score}
      </Badge>
    </>
  );
}

export default CriticScore;
