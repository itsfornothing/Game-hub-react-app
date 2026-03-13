import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImgUrl from "@/services/image-url";
import { HStack, List, ListItem, Image, Spinner, Button } from "@chakra-ui/react";

interface Props {
    onSelectGenre: (genre: Genre)=>void;
}

const GenreList = ({onSelectGenre}: Props) => {
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
            <Button fontSize='lg' variant='plain' onClick={()=>{onSelectGenre(genre)}}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
