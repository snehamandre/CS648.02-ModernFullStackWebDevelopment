/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormControl, FormGroup, ControlLabel, Button,
} from 'react-bootstrap';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;

    const product = {
      productName: form.productName.value, pricePerUnit: form.pricePerUnit.value.substr(1), category: form.category.value, imageUrl: form.imageUrl.value,
    };

    const { createProduct } = this.props;
    createProduct(product);

    form.productName.value = '';
    form.pricePerUnit.value = '$';
    form.category.value = 'Shirts';
    form.imageUrl.value = '';
  }


  render() {
    return (
      <Form inline name="productAdd" onSubmit={this.handleSubmit}>
      <FormGroup>
        <ControlLabel>Owner:</ControlLabel>
        {' '}
        <FormControl type="text" name="owner" />
      </FormGroup>
      {' '}
      <FormGroup>
        <ControlLabel>Title:</ControlLabel>
        {' '}
        <FormControl type="text" name="title" />
      </FormGroup>
      {' '}
      <Button bsStyle="primary" type="submit">Add</Button>
    </Form>
    );
  }
}

ProductAdd.propTypes = {
  createProduct: PropTypes.func.isRequired,
};
