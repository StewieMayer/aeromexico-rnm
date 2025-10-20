'use client'
import { CharacterCard } from "@/components/CharacterCard/CharacterCard";
import { CharacterSidebar } from "@/components/CharacterSidebar/CharacterSidebar";
import Viewer from "@/components/Viewer/Viewer";

export default function Page() {

  return (
    <Viewer>
      <CharacterCard />
      <CharacterSidebar />
    </Viewer>
  );
}
