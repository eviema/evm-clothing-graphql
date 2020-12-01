import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors.js";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // ownProps: props of the component we're wrapping in connect()
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  // selectCollection: a func that returns a func ("currying"), i.e. createSelector(),
  // which takes "state" as an arg.
});

export default connect(mapStateToProps)(CollectionPage);
