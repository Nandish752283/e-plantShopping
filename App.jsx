import { useState } from "react";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      {!showProducts ? (
        <div>
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <h2>Product List Coming Here</h2>
      )}
    </div>
  );
}

export default App;
