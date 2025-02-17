import { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from '../../store/cart-context';

// Define the products array
const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const ProductPage = () => {
  const { addCartItem } = useContext(CartContext);

  return (
    <Container>
      <Row>
        {productsArr.map((item) => (
          <Col key={item.id} className="mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <div>
                  <span>${item.price}</span>
                </div>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => addCartItem({ ...item, quantity: 1 })}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
