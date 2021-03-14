import * as React from "react";
import {
  Wrapper,
  Title,
  Name,
  BasicStats,
  Meta,
  Preview,
  Image,
  SkillList,
  Skill,
} from "./styles/PokemonCard";

export type Pokemon = {
  id: string;
  name: string;
  image: string;
  maxHP: number;
  maxCP: number;
  types: string[];
  attacks: {
    special: [
      {
        name: string;
        damage: number;
      }
    ];
  };
};

export interface PokemonProps {
  pokemon: Pokemon;
  classes?: string;
  restProps?: React.HTMLAttributes<HTMLElement>;
}

export const PokemonCard: React.FC<PokemonProps> = ({
  pokemon,
  classes,
  restProps,
}) => {
  return (
    <Wrapper>
      <Title>
        <Name>{pokemon.name}</Name>
      </Title>
      <BasicStats>
        <Meta>{pokemon.maxHP}</Meta>
        <Meta>{pokemon.maxCP}</Meta>
      </BasicStats>
      <Preview>
        <Image src={pokemon.image} alt={pokemon.name} />
      </Preview>
      <SkillList>
        {pokemon.attacks &&
          Array.from(pokemon.attacks.special).map(({ name, damage }) => (
            <Skill key={`${name}-${damage}`}>{name}</Skill>
          ))}
      </SkillList>
    </Wrapper>
  );
};
