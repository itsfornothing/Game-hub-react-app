import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardConrainer from "./GameCardConrainer.tsx";
import type { Genre } from "@/hooks/useGenres.ts";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={3} padding={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConrainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardConrainer>
          ))}
        {data.map((game) => (
          <GameCardConrainer key={game.id}>
            <GameCard game={game} />
          </GameCardConrainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
