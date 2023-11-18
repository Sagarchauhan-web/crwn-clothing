import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

const withSpinner = (WrappedComponent) => {
  const spinner = ({ isloading, ...props }) => {
    return isloading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };
  return spinner;
};

export default withSpinner;
