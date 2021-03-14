import * as React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/getPokemons";
import { PokemonCard } from "../components";
import { Pokemon } from "../components/PokemonCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-width: 900px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    margin: 0;
  }
`;

export const PokemonContainer: React.FC = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 10 },
  });

  return (
    <Container>
      {pokemons &&
        pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
    </Container>
  );
};
