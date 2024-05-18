import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Banner1 from "../../assets/Carousal/Banner1.jpg";
import Banner2 from "../../assets/Carousal/Banner2.jpg";
import Banner3 from "../../assets/Carousal/Banner3.jpg";

const CarousalCard = () => {
  var items = [
    {
      bgImg: Banner1,
      description: "Banner1",
    },
    {
      bgImg: Banner2,
      description: "Banner2",
    },
    {
      bgImg: Banner3,
      description: "Banner3",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper>
      {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}

      {/* <img src={props} alt=''/> */}
      {/* <div class="" style={{backgroundImage:`url(requiire(${props}))`}}></div> */}

      <div class="w-screen h-96 bg-cover" style={{ backgroundImage: `url(${props.item.bgImg})` }}>
        <p>{props.item.description}</p>
      </div>

      {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
    </Paper>
  );
}

<Carousel
  NextIcon={<img src="http://random.com/next" alt="next" />}
  PrevIcon={<img src="http://random.com/prev" alt="prev" />}
></Carousel>;

export default CarousalCard;
