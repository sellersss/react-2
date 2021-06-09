import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ items, itemType }) {
  console.log("items FROM MENU: ", items, itemType);

  // for capitlizing menu category
  const toCapitalize = (str) => {
    return str[0].toUpperCase() + str.substring(1);
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {toCapitalize(itemType)} Menu
          </CardTitle>
          <CardText>

          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${itemType}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
