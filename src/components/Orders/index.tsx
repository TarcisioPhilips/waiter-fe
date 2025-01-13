import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        title="Fila de Espera"
        icon="🕛" orders={[]} />
      <OrdersBoard
        title="Em preparação"
        icon="🧑‍🍳" orders={[]} />
      <OrdersBoard
        title="Pronto"
        icon="✅" orders={[]} />
    </Container>
  )
}