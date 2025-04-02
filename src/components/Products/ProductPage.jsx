import { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from '../../store/cart-context';
import { Link } from 'react-router-dom'; 



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

  const handleAddCart=(item)=>{
    //console.log(item)
    const cartItem = {
      product_id:`${item.id}-${item.title}`, 
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      quantity: 1,
    };
    addCartItem(cartItem); };



  return (
    <Container>
      <Row>
        {productsArr.map((item) => (
          <Col key={item.id} className="mb-4 mt-4">
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <div>
                  <span>${item.price}</span>
                </div>
                <Link to={`/product/${item.id}`}>
                <Button variant='warning' size='sm'>View Product</Button>
                </Link>
                
                <Button
                  variant="primary"
                  type="button"
                  size='sm'
                  
                  onClick={() => handleAddCart(item)}
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
