import type { Game } from "../hooks/useGames"; // Check your path
import { Card, Image, Heading } from "@chakra-ui/react";

interface Props { // Capitalized 'Props'
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'> 
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;