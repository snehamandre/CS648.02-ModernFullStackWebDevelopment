import React from 'react';
import {
  Button, Glyphicon, Tooltip, OverlayTrigger, Table,
} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const ProductRow = withRouter(({ product, deleteProduct, index }) => {
  const editTooltip = (
    <Tooltip id="edit-tooltip" placement="top">Edit Product</Tooltip>
  );
  const deleteTooltip = (
    <Tooltip id="delete-tooltip" placement="top">Delete Product</Tooltip>
  );

  function onDelete(e) {
    e.preventDefault();
    deleteProduct(index);
  }

  const tableRow = (
    <tr>
      <td>{product.id}</td>
      <td>{product.category}</td>
      <td>{product.productName}</td>
      <td>
        $
        {product.pricePerUnit}
      </td>
      <td><Link to={`/image/${encodeURIComponent(product.imageUrl)}`}>View</Link></td>
      <td>

        <LinkContainer to={`/edit/${product.id}`}>
          <OverlayTrigger delayShow={1000} overlay={editTooltip}>
            <Button bsSize="xsmall">
              <Glyphicon glyph="edit" />
            </Button>
          </OverlayTrigger>
        </LinkContainer>
        {' '}
        <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
          <Button bsSize="xsmall" onClick={onDelete}>
            <Glyphicon glyph="trash" />
          </Button>
        </OverlayTrigger>
      </td>
    </tr>
  );

  return tableRow;
});

export default function ProductTable({ products, deleteProduct }) {
  const productRows = products.map(product => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={product.id}
    />
  ));

  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </Table>
  );
}
