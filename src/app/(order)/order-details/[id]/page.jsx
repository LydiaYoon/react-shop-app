import React from 'react';

const OrderDetails = ({ params, searchParams }) => {
  const { id } = params; // path
  const { code } = searchParams; // queryString

  return (
    <div>
      id: {id}, code: {code}
    </div>
  );
};

export default OrderDetails;
