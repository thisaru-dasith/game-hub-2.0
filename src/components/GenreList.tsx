import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCropImages from "../services/image-url";
import useGenres, { Genre } from "../hooks/useGenre";

interface Prop {
  onSelectedGenre: (genre: Genre) => void;
}

function GenresList({ onSelectedGenre }: Prop) {
  const { data } = useGenres();

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCropImages(genre.image_background)}
              ></Image>
              <Button
                fontSize="10px"
                variant={"link"}
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenresList;
