import { Container,Card,Button,Row,Col } from "react-bootstrap"



const tourData=[
    {	date: 'JUL 16',city: 'DETROIT, MI',venue: 'DTE ENERGY MUSIC THEATRE',
	},
    {	date: 'JUL 19',city: 'TORONTO,ON',venue: 'BUDWEISER STAGE',
	},
    {date: 'JUL 22',city: 'BRISTOW, VA',venue: 'JIGGY LUBE LIVE',
	},
    {date: 'JUL 29',city: 'PHOENIX, AZ',venue: 'AK-CHIN PAVILION',
	},
    {date: 'AUG 2',city: 'LAS VEGAS, NV',venue: 'T-MOBILE ARENA',
	},
    {date: 'AUG 7',city: 'CONCORD, CA',venue: 'CONCORD PAVILION',
	},
]

const Home = () => {
	return <>
      <Container>
                <h2 className="text-center mt-4">Tour</h2>
                <Row className="g-4">
        {tourData.map((tour,index)=>(
            <Col key={index} xs={12} md={6} lg={4}>
             <Card className="text-center shadow-sm">
                <Card.Body>
            <Card.Text>{tour.date}</Card.Text>
            <Card.Text>{tour.city}</Card.Text>
            <Card.Text>{tour.venue}</Card.Text>
            <Button type="click" variant="warning">Buy Tickets</Button>
            <hr></hr>
            </Card.Body>
        </Card>
        </Col>
    ))}
    </Row>
    
    </Container>
    </>
};
export default Home;