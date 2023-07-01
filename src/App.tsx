import { Outlet } from "react-router-dom";
import { Container } from "@/components/shared/Container";

export default function App() {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
    </main>
  );
}
