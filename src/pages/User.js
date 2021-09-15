import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { id } = useParams();

  return (
    <>
      <h4 className="title">Display User Details Here</h4>
    </>
  );
};

export default User;
