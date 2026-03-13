import useGenres from "@/hooks/useGenres";
import getCroppedImgUrl from "@/services/image-url";
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if(error) return null;
  if (isLoading) return <Spinner/>;
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
