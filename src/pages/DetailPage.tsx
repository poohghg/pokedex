import React, { Fragment } from 'react';
import { PoketmonList } from 'components';
import { useParams } from 'react-router-dom';

type params = {
  id: string;
};

const DetailPage = () => {
  const { id } = useParams<params>();

  return (
    <>
      <PoketmonList />
      <div>현재 ID는: {id}</div>
    </>
  );
};

export default DetailPage;
