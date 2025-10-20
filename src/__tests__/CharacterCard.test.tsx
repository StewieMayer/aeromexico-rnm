import React from "react";
import { render, screen } from "@testing-library/react";
import { CharacterCard } from "../components/CharacterCard/CharacterCard";
import { useCharacterCard } from "../components/CharacterCard/useCharacterCard";

jest.mock("../components/CharacterCard/useCharacterCard");

describe("CharacterCard", () => {
  const mockCharacter = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  };

  const mockedUseCharacterCard = jest.mocked(useCharacterCard);

  beforeEach(() => {
    mockedUseCharacterCard.mockClear();
  });

  describe("When render without select a currentCharacter", () => {
    it("should render an skeleton", () => {
      mockedUseCharacterCard.mockReturnValue({ currentCharacter: null });

      render(<CharacterCard />);

      expect(screen.getByTestId("skeleton")).toBeInTheDocument();
      expect(screen.queryByText(mockCharacter.name)).not.toBeInTheDocument();
    });
  });

  describe("When renders a currentCharacter", () => {
    it("should show character's data", () => {
      
      mockedUseCharacterCard.mockReturnValue({
        currentCharacter: mockCharacter,
      });

      render(<CharacterCard />);

      //Name
      expect(
        screen.getByRole("heading", { name: mockCharacter.name, level: 3 })
      ).toBeInTheDocument();
      //Species
      expect(screen.getByText(mockCharacter.species)).toBeInTheDocument();
      //Status
      expect(screen.getByText("VIVO")).toBeInTheDocument();
      //Origin
      expect(
        screen.getByRole("heading", { name: "Origin", level: 3 })
      ).toBeInTheDocument();
      expect(screen.getByText(mockCharacter.origin.name)).toBeInTheDocument();
      //Location
      expect(
        screen.getByRole("heading", { name: "Location", level: 3 })
      ).toBeInTheDocument();
      expect(screen.getByText(mockCharacter.location.name)).toBeInTheDocument();
//Gender
      expect(
        screen.getByRole("heading", { name: "Gender", level: 3 })
      ).toBeInTheDocument();
      expect(screen.getByText(mockCharacter.gender)).toBeInTheDocument();
      //Episodes
      expect(
        screen.getByRole("heading", { name: "Episodes", level: 3 })
      ).toBeInTheDocument();
      expect(
        screen.getByText(mockCharacter.episode.length.toString())
      ).toBeInTheDocument();
      
      //Skeleton
      expect(screen.queryByTestId("skeleton")).not.toBeInTheDocument();
    });
  });

});
