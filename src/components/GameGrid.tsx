import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from './GameCards'; 

const GameGrid = () => {
  const { games, error } = useGames();
  
  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} gap={10} padding={10}>
        {games.map((game) => (
            <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;