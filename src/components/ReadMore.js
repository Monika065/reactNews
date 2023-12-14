import React from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { useGetArticleByIdQuery } from "../redux/features/apiSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ReadMore.css"

const ReadMore = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: article, isLoading, isError } = useGetArticleByIdQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading</div>;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {/* Other content */}
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography variant="h4"  paddingTop={" 30px"}gutterBottom>
              {article.title}
            </Typography>
            <img
              src={article.image}
              alt={article.title}
              style={{ maxWidth: "100%", height: "100%" }}
            />
            <Typography variant="body1"  fontSize={"20px"} paragraph>
              {article.content}
            </Typography>
            <Typography variant="body1" fontSize={"20px"} paragraph>
              {article.description}
            </Typography>

            {/* Displaying the image */}
           

            <Box mt={2}>
              {/* Other details */}
              <Typography variant="h6" gutterBottom>
               follow link for more information
               
              </Typography>
              {/* Additional content */}
            </Box>
          </Box>
        </Grid>
        {/* Other grid items */}
      </Grid>
    </Container>
  );
};

export default ReadMore;
