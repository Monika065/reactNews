import React, { useEffect, useState } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import NullImage from "../../components/Images/nullImage.png";
import NewsItem from "../NewsItem/NewsItem";
import { Row } from "react-bootstrap";
import { header } from "../../config/config";
import { Container, Header, card } from "./index";
// import { useDispatch } from "react-redux";
import { useGetArticlesQuery } from "../../redux/features/apiSlice";
import Home from "../userpost/Home";
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
      {/* <Home/> */}
      <Header>{header(capitaLize(category))}</Header>
      
      <Container>
        <Row>
          {/* s */}
          <div className="row row-cols-1 row-cols-md-4 row-eq-height">
            {filteredArticles.map((element) => {
              return (
                
                <div
                  className="col-sm-4  d-flex align-items-stretch "
                  style={card}
                  // key={uuidv4()}
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
      <Home/>
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
