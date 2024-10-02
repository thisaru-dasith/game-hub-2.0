import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCropImages from "../services/image-url";

function GenreList() {
  const { data } = useGenre();

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCropImages(genre.background_image)}
              ></Image>
              <Text fontSize="10px">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
