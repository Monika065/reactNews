import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import Details from "./Details/Details";
import { card, img, btn, text } from "./index";
import "./style.css"
import { Link } from "react-router-dom";

function NewsItem(props) {
  const { imageUrl, alt, description, title, channel, published, urlNews } = props;

  return (
    <>
      <Card className="text-" style= {card} >
        <Card.Img className="news-img img-fluid"
  
        style={img} 
        variant="top"
         src={imageUrl} 
         alt={alt} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={text}>{description} </Card.Text>
          <Details channel={channel} published={published} />
          <Link
  to={{
    pathname: "/readmore",
    state: {
      title: title,
      description: description,
      imageUrl: imageUrl
    }
  }}
>
  <Button>
    <b>Read More</b>
  </Button>
</Link>

           
        </Card.Body>
      </Card>
    </>
  );
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  published: PropTypes.string,
  urlNews: PropTypes.string,
};

export default NewsItem;
