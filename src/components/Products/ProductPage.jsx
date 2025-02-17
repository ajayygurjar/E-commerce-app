import { Container, Row, Col, Card, Button } from 'react-bootstrap';


// Define the products array
const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const ProductPage = () => {
  return (
    <Container>
      
      <Row>
        {productsArr.map((item, index) => (
          <Col key={index}  className="mb-4"> 
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <div>
                  <span>${item.price}</span>
                </div>
                <Button variant="primary" type="button">
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
