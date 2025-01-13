import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrderContainer } from "../OrdersBoard/styles";

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({ title, icon, orders }: OrdersBoardProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);


  function handleOpenModal(order: Order) {
    setSelectedOrder(order);
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      {isModalVisible && selectedOrder && (
        <OrderModal visible={isModalVisible} order={selectedOrder} onCloseModal={handleCloseModal} />
      )}

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrderContainer>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>
                Mesa {order.table}
              </strong>
              <span>
                {order.products.length} itens
              </span>
            </button>
          ))}
        </OrderContainer>
      )}


    </Board>

  )
}