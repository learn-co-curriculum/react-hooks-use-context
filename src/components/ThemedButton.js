import React from "react";

function ThemedButton({ theme, ...props }) {
  return <button className={theme} {...props} />;
}

export default ThemedButton;
