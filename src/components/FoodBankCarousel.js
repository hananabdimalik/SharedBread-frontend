import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";

function FoodBankCarousel() {
  const [location, setLocation] = useState([{ name: "Loading..." }]);

  const postcode = "PR253NX"; // this will be dynamic - either geolocation or pc from DB.

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.givefood.org.uk/api/1/foodbanks/search/?address=${postcode}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLocation(data);
      });
  }, []);

  return (
    <Carousel indicators={false}>
      {location.map((foodbank) => {
        return (
          <Carousel.Item key={`${foodbank.charity_number}`}>
            <Card>
              <Card.Body>
                <Card.Title>{foodbank.name}</Card.Title>
                <Card.Text>{foodbank.district}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"><a href={`tel:${foodbank.phone}`}>{foodbank.phone}</a></small>
              </Card.Footer>
            </Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default FoodBankCarousel;
