import SpacedLayout from "@/components/layouts/spaced";
import StackLayout from "@/components/layouts/stack";
import Hero from "./_components/hero";

export default function Home() {
  return (
    <SpacedLayout>
      <StackLayout>
        <Hero />
      </StackLayout>
    </SpacedLayout>
  );
}
