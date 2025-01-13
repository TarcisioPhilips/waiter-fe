import { Order } from "../../types/Order";
import { Board, OrderContainer } from "../OrdersBoard/styles";

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({ title, icon }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <OrderContainer>
        <button type="button">
          <strong>
            Mesa 1
          </strong>
          <span>
            2 itens
          </span>
        </button>
        <button type="button">
          <strong>
            Mesa 2
          </strong>
          <span>
            2 itens
          </span>
        </button>
      </OrderContainer>
    </Board>

  )
}