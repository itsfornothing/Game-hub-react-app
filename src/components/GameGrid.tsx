import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardConrainer from "./GameCardConrainer.tsx";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConrainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardConrainer>
          ))}
        {games.map((game) => (
          <GameCardConrainer>
            <GameCard key={game.id} game={game} />
          </GameCardConrainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
