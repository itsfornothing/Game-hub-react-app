import type { Game } from "../hooks/useGames"; // Check your path
import { Card, Image, Heading } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  // Capitalized 'Props'
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  ); 
};

export default GameCard;
