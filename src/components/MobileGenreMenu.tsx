import {
  Button,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
  DrawerBody
} from "@chakra-ui/react";

import GenreList from "./GenreList";
import type { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const MobileGenreMenu = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <DrawerRoot>
      <DrawerTrigger asChild>
        <Button variant="outline">
          Genres: {selectedGenre?.name || "All"}
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerBody padding={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => onSelectGenre(genre)}
          />
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileGenreMenu;