import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { tanStackData } from './TanStackQuery';

const TestTanStack = () => {
  const { data } = useQuery({
    queryKey: ['aplication'],
    queryFn: tanStackData,
  });

  // Ensure safe access to products
  const products = Array.isArray(data) ? data : data?.products || [];
 

  return (
    <div>
      <h2>Hey</h2>
      {products.length > 0 ? (
        products.map((product, index) => <p key={index}>{product.name}</p>)
      ) : (
        <p>Loading or No products available</p>
      )}
    </div>
  );
};

export default TestTanStack;
