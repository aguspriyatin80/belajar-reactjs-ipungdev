import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import {Link} from 'react-router-dom';

function CardComp(props) {
    return (
        <div>
      <Card>
        <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5"><h2>{props.judul}</h2></CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.tanggal}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to= {
              {
                  pathname: `/detail/${props.id}`,
                  state: {
                      judul: props.judul,
                      tanggal: props.tanggal
                  }
              }
          }>Detail</Link></Button>
        </CardBody>
      </Card>
     
    </div>
    );
}

export default CardComp;