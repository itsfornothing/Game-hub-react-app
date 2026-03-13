import useGenres from "@/hooks/useGenres";
import getCroppedImgUrl from "@/services/image-url";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List.Root listStyle="none">
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImgUrl(genre.image_background)}
            />{" "}
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
