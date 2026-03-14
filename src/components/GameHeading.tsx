import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading size="4xl" marginY={5} asChild>
      <h1>{heading}</h1>
    </Heading>
  );
};

export default GameHeading;
