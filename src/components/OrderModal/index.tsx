import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect } from "react";

interface OrderModalProps {
  visible: boolean;
  order: Order;
  onCloseModal: () => void;
}

export function OrderModal({ visible, order, onCloseModal }: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onCloseModal();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [onCloseModal]);

  if (!visible) {
    return null;
  }

  function handleCloseModal() {
    onCloseModal();
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={handleCloseModal}>
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕛'}
              {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && "Fila de espera"}
              {order.status === 'IN_PRODUCTION' && "Em preparação"}
              {order.status === 'DONE' && "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div key={_id} className="item">
                <img src={product.imagePath} alt={product.name} width={56} height={28.51} />
                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(order.products.reduce((total, { product, quantity }) => {
              return total + (product.price * quantity);
            }, 0))}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary">
            <span>👨‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>

          <button type="button" className="secondary">
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>

      </ModalBody>
    </Overlay>
  );
}