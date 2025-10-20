'use client'
import { CharacterCard } from "@/components/CharacterCard/CharacterCard";
import Viewer from "@/components/Viewer/Viewer";

export default function Page() {

  return (
    <Viewer>
      <CharacterCard />
    </Viewer>
  );
}
