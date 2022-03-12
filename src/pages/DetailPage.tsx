import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

type params = {
  id: string;
};

const DetailPage = () => {
  const { id } = useParams<params>();

  return <div>현재 ID는: {id}</div>;
};

export default DetailPage;
