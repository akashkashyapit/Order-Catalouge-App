import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { addToCart } from "../actions/cartActions";
import { connect } from "react-redux";
// import Rating from "@material-ui/lab/Rating";
// import DialogBox from "./DialogBox";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 200,
  },
});

function ProductCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a
          href={"#" + props.product._id}
          onClick={() => props.openModal(props.product)}
        >
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h5">
              {props.title}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
      <CardActions>
        <Typography variant="h6" component="h6" style={{ marginRight: "auto" }}>
          Price: <strong>{props.price}</strong>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.addToCart(props.product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect((state) => ({}), {
  addToCart,
})(ProductCard);
