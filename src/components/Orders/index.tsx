import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { Order } from "../../types/Order";


const orders: Order[] = [
  {
    _id: '1',
    table: '1',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza Calabresa',
          imagePath: 'https://github.com/lucas-santana-dev/delivery-app-react-native/blob/main/assets/pizza.png?raw=true',
          price: 40,
        },
        quantity: 3,
        _id: '1',
      },
      {
        product: {
          name: 'Pizza Calabresa',
          imagePath: 'https://github.com/lucas-santana-dev/delivery-app-react-native/blob/main/assets/pizza.png?raw=true',
          price: 40,
        },
        quantity: 3,
        _id: '2',
      }
    ]
  },
  {
    _id: '2',
    table: '1',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza Calabresa',
          imagePath: 'https://github.com/lucas-santana-dev/delivery-app-react-native/blob/main/assets/pizza.png?raw=true',
          price: 40,
        },
        quantity: 3,
        _id: '1',
      }
    ]
  }
]

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        title="Fila de Espera"
        icon="🕛"
        orders={orders}
      />
      <OrdersBoard
        title="Em preparação"
        icon="🧑‍🍳"
        orders={[]}
      />
      <OrdersBoard
        title="Pronto"
        icon="✅"
        orders={[]}
      />
    </Container>
  )
}