import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import Details from "./Details/Details";
import { card, img, btn, text } from "./index";
import "./style.css";
import { Link } from "react-router-dom";

function NewsItem(props) {
  const { imageUrl, alt, description, title, channel, published, urlNews,id,content } =
    props;

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength).trim() + "..."
      : text;
  };

  return (
    <>
      <Card className="text-" style={card}>
      <Link to={`/articles/${id}`}
          >
        <Card.Img
          className="news-img img-fluid"
          style={img}
          variant="top"
          src={imageUrl}
          alt={alt}
        />
        </Link>
        <Card.Body>
          <Card.Title style={{ WebkitLineClamp: 5}}>
            {truncateText(title, 35)}
          </Card.Title>
          {/* <Card.Text style={text}>{truncateText(content,100)}</Card.Text> */}
          <Card.Text style={text}>{truncateText(description, 110)}</Card.Text>

          <Details channel={channel} published={published} />
          <Link to={`/articles/${id}`}
          >
            <Button style={{ marginTop: "auto" }}>
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

















