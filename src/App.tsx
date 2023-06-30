import { Outlet } from "react-router-dom";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { useContext } from "./hooks";

export default function App() {
  const { inputType } = useContext();
  return (
    <main>
      <Container>
        <Header />
        <Outlet />
        <div>{inputType}</div>
      </Container>
    </main>
  );
}
