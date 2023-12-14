import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NullImage from "../../components/Images/nullImage.png";
// import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { Row } from "react-bootstrap";
import { header } from "../../config/config";
// import { endpointPath } from "../../config/api";
import { Container, Header, card } from "./index";
// import { useDispatch } from "react-redux";
import { useGetArticlesQuery } from "../../redux/features/apiSlice";
function News(props) {
  //const dispatch = useDispatch();
  const { data: articles = [], isLoading, isError } = useGetArticlesQuery();
  console.log(articles);

  console.log(articles);
  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const filterByCategory =
    props.newscategory !== ""
      ? articles.filter((item) => item.source.category === props.newscategory)
      : articles;
  console.log(filterByCategory);
  const filteredArticles = filterByCategory.filter((item) =>
    item.title.toLowerCase().includes(props.searchTerm.toLowerCase())
  );

  const category = props.newscategory;
  const title = capitaLize(category);
  document.title = `${capitaLize(title)} - News`;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }
  return (
    <>
      {/* {loading ? (
        <Loading />
      ) : ( */}
      {/* <>  */}
      <Header>{header(capitaLize(category))}</Header>
      <Container>
        <Row>
          {/* s */}
          <div className="row row-cols-1 row-cols-md-4 row-eq-height">
            {filteredArticles.map((element) => {
              return (
                // <Col sm={12} md={6} lg={4} xl={3} style={card} key={uuidv4()}>
                <div
                  className="col-sm-4  d-flex align-items-stretch "
                  style={card}
                  key={uuidv4()}
                >
                   
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    content={element.content}
                    published={element.publishedAt}
                    channel={element.source.name}
                    alt="News Image"
                    publishedAt={element.publishedAt}
                    
                    imageUrl={
                      element.image === null ? NullImage : element.image
                    }
                   
                    urlNews={element.url}
                    id={element.id}
                    
                  />
                  
                </div>
              );
            })}
          </div>
          {/* </div> */}
        </Row>
      </Container>

      {/* </> */}
      {/* )} */}
    </>
  );
}

News.defaultProps = {
  country: "us",
  newscategory: "general",
};

News.propTypes = {
  country: PropTypes.string,
  newscategory: PropTypes.string,
};

export default News;
