import React from "react";
import { FormGroup, Form, Label, Input, Button, Card, CardBody, CardTitle } from "reactstrap";
import { useState } from "react";


function NewFoodForm({ createId, addFoodItem }) {
  // set states for food item
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");
  const [category, setCategory] = useState("Snacks");

  // handle name change
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  }

  // handle description change
  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  }

  // handle recipe change
  const handleRecipeChange = (evt) => {
    setRecipe(evt.target.value);
  }

  // handle serve change
  const handleServeChange = (evt) => {
    setServe(evt.target.value);
  }

  // handle category change
  const handleCategoryChange = (evt) => {
    setCategory(evt.target.value);
  }

  // on submit, handle inputs
  const handleInput = (evt) => {
    // no refresh
    evt.preventDefault();

    // creates id
    setId(createId(name));

    // adds item to database
    const foodItem = { id, name, description, recipe, serve };
    addFoodItem(foodItem, category);

    // clear state
    setId("");
    setName("");
    setDescription("");
    setRecipe("");
    setServe("");
  };

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <Form onSubmit={handleInput}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                onChange={handleNameChange}
                value={name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                onChange={handleDescriptionChange}
                value={description}
              />
            </FormGroup>
            <FormGroup>
              <Label for="recipe">Recipe</Label>
              <Input
                type="textarea"
                name="recipe"
                id="recipe"
                onChange={handleRecipeChange}
                value={recipe}
              />
            </FormGroup>
            <FormGroup>
              <Label for="serve">Serve</Label>
              <Input
                type="text"
                name="serve"
                id="serve"
                onChange={handleServeChange}
                value={serve}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                type="select"
                name="category"
                id="category"
                onChange={handleCategoryChange}
              >
                <option value="Snacks">
                  Snacks
                </option>
                <option value="Drinks">Drinks</option>
              </Input>
            </FormGroup>
            <Button color="secondary">Add</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  )
}

export default NewFoodForm;
