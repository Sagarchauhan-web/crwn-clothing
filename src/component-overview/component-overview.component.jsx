import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForOverview } from "../redux/shop/shop.selector";
import ComponentPreview from "../component-preview/component-preview";

const ComponentOverview = ({ collection }) => {
  return (
    <div>
      {collection.map(({ id, ...otherComponentProperty }) => (
        <ComponentPreview key={id} {...otherComponentProperty} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: selectCollectionsForOverview,
});

export default connect(mapStateToProps)(ComponentOverview);
