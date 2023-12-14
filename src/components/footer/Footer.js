import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="https://static.toiimg.com/photo/71215965.cms" />
            <p>
              The Times of India is an English language daily newspaper
              published in Mumbai, Ahmadabad, and Delhi.
            </p>
            <i className="fa fa-envelope"></i>
            <span> hello@monika.com </span> <br />
            <i className="fa fa-headphones"></i>
            <span> +91 60521488</span>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </div>
          <Grid item xs={12} sm={4}>
            <div className="box">
              <ul>
                <h3>TOP TRENDS</h3>

                <li>Corona cases in India</li>
                <li>Exit polls 2021</li>
                <li>West Bengal Exit poll 2021</li>
                <li>DC vs KKR</li>
                <li>Tamil Nadu Exit Poll 2021</li>
                
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="box">
              <ul>
                <h3>POPULAR CATEGORIES</h3>

                <li>Headlines</li>
                <li>Sports News</li>
                <li>Business News</li>
                <li>India News</li>
                <li>World News</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="box">
              <ul>
                <h3>LABELS</h3>
                {/*<i className='fa fa-chevron-right'></i>*/}
                
                <li>
                  <span>Boxing</span> <label>(1)</label>
                </li>
                <li>
                  <span>Fashion</span> <label>(2)</label>
                </li>
                <li>
                  <span>Health</span> <label>(3)</label>
                </li>
                <li>
                  <span>Nature</span> <label>(4)</label>
                </li>
              </ul>
            </div>
          </Grid>
        </div>
      </footer>
    </>
  );
};

export default Footer;
