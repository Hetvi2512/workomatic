import React from "react";

import SHOP_DATA from "./shop.data";

import { render } from "@testing-library/react";
import PreviewCollection from "./../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shope-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;