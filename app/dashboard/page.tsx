import SpacedLayout from "@/components/layouts/spaced";
import UserLayout from "@/components/layouts/user";

export default function Dashboard() {
  return (
    <SpacedLayout>
      <UserLayout></UserLayout>
    </SpacedLayout>
  );
}
