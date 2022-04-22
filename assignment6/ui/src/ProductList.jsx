/* eslint-disable react/jsx-no-undef */
import React from 'react';

import ProductTable from './ProductTable.jsx';
import graphQLFetch from './graphQLFetch.js';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
            productList {
              id
              productName
              pricePerUnit
              category
              imageUrl
            }
          }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ products: data.productList });
    }
  }

  async deleteProduct(id) {
    const query = `mutation deleteProduct($id: Int!) {
      deleteProduct(id: $id)
    }`;

    const data = await graphQLFetch(query, { id });
    if (data) {
      alert('Product deleted product successfully!');
      this.loadData();
    }
  }

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <h4>Showing all available products</h4>
        <hr />
        <ProductTable products={products} deleteProduct={this.deleteProduct} />
        <br />
      </React.Fragment>
    );
  }
}
