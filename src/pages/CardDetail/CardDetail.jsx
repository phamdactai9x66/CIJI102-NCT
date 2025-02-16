import React from "react";
import { useParams } from "react-router";

const CardDetail = () => {
  const params = useParams();

  console.log(params);

  return <div>Card Detail {params.idCard}</div>;
};

export default CardDetail;
