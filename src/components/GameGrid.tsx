import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardConrainer from "./GameCardContainer.tsx";
import type { GameQuery } from "@/App.tsx";

interface Props {
  gameQuery: GameQuery;
  
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 20 }, (_, i) => i);

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6} padding={3}>
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
