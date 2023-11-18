import React from "react";
import "./directory.style.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectSections } from "../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
