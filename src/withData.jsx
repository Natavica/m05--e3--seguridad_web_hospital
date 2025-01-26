// src/withData.jsx
import React, { useState, useEffect } from 'react';

// Este es el HOC que se encargará de pasar datos locales a los componentes
const withData = (WrappedComponent, data) => {
  return function WithData(props) {
    const [dataState, setDataState] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(false); // No hace falta hacer una solicitud ya que usamos datos locales
    }, [data]);

    if (loading) return <div>Loading...</div>;

    return <WrappedComponent {...props} data={dataState} />;
  };
};

export default withData;
