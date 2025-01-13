import { Order } from "../../types/Order";
import { Board, OrderContainer } from "../OrdersBoard/styles";

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({ title, icon, orders }: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      <OrderContainer>
        {orders.map((order) => (
          <button type="button" key={order._id}>
            <strong>
              Mesa {order.table}
            </strong>
            <span>
              {order.products.length} itens
            </span>
          </button>
        ))}
      </OrderContainer>
    </Board>

  )
}