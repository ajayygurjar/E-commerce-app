import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';


const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    ],
    reviews: [
      { user: 'John', rating: 5, comment: 'Amazing colors, really vibrant!' },
      { user: 'Jane', rating: 4, comment: 'Great quality, but the price is a bit high.' },
    ],
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    ],
    reviews: [
      { user: 'Alice', rating: 4, comment: 'Sleek and stylish. Love the black and white theme!' },
    ],
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    ],
    reviews: [
      { user: 'David', rating: 3, comment: 'Nice combination, but not exactly my style.' },
    ],
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    ],
    reviews: [
      { user: 'Emma', rating: 5, comment: 'Love this color! The blue is so soothing and beautiful.' },
    ],
  },
];

const ProductDetailPage = () => {
  // Get the product ID from the URL parameter
  const { id } = useParams();
  const { addCartItem } = useContext(CartContext);

  // Find the product by the given ID
  const product = productsArr.find(item => item.id === parseInt(id));

  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container className='mt-4'>
      <Row>
        <Col md={6}>
          {/* Display the main product image */}
          <img src={product.imageUrl} alt={product.title} width="100%" />
          
          {/* Display other images of the product */}
          <div className="mt-4">
            {product.images.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt={`product-${index}`} width="100" style={{ margin: '5px' }} />
            ))}
          </div>
        </Col>
        
        <Col md={6}>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <div>
              <span>${product.price}</span>
            </div>
            <Button
              variant="primary"
              type="button"
              onClick={() => addCartItem({ ...product, quantity: 1 })}
            >
              Add to Cart
            </Button>

            {/* Display product reviews */}
            <div className="mt-4">
              <h5>Reviews</h5>
              {product.reviews.map((review, index) => (
                <div key={index} className="mb-3">
                  <strong>{review.user}</strong> - {review.rating}⭐
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
