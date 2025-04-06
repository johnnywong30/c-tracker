import SpacedLayout from "@/components/layouts/spaced";
import StackLayout from "@/components/layouts/stack";

export default function Home() {
  return (
    <SpacedLayout>
      <StackLayout>
        <h1>Hello</h1>
        <h1>World</h1>
      </StackLayout>
    </SpacedLayout>
  );
}
