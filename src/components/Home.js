import React, { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an external source or local JSON file
    fetch('/path/to/your/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Ver Detalle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
