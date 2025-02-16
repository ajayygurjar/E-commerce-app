import { Button, Card } from 'react-bootstrap';

const Item = ({ title, price, imageUrl }) => {
  return (
    <li>
      <Card style={{ width: '18rem', marginBottom: '20px' }}>
        <Card.Img variant="top" src={imageUrl} alt="product img" />
        
          <Card.Title>{title}</Card.Title>
          <div>
            <span>
              ${price}
            </span>
          </div>
          <Button variant="primary" type="button">
            Add to Cart
          </Button>
        
      </Card>
    </li>
  );
};

export default Item;
