import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsFetching } from "../redux/shop/shop.selector.js";
import { selectIsCollectionLoaded } from "../redux/shop/shop.selector.js";

import withSpinner from "../spinner/with-spinner.component.jsx";
import { fetchCollectionStartAsync } from "./../redux/shop/shop.action.js";

import Collection from "../components/collection/collection.component";
import ComponentOverview from "../component-overview/component-overview.component";

const ComponentOverviewHOC = withSpinner(ComponentOverview);
const CollectionHOC = withSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.url}`}
          render={(props) => (
            <ComponentOverviewHOC isloading={!isCollectionLoaded} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.url}/:collectionId`}
          render={(props) => (
            <CollectionHOC isloading={!isCollectionLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
