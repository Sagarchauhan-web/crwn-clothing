import React from "react";
import "./component-preview.scss";
import ComponentItem from "../component-item/component-item.component";

const ComponentPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <ComponentItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ComponentPreview;
