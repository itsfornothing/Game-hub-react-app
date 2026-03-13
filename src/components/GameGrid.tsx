import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames, { type Platform } from "../hooks/useGames.ts";
import GameCard from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardConrainer from "./GameCardContainer.tsx";
import type { Genre } from "@/hooks/useGenres.ts";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = Array.from({ length: 20 }, (_, i) => i);

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
        {data?.map((game) => (
          <GameCardConrainer key={game.id}>
            <GameCard game={game} />
          </GameCardConrainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
