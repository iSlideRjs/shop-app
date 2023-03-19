import { useContext } from 'react';
import { ShopContext } from '../context';

function Filter() {
  const { setSearchName } = useContext(ShopContext);
  return (
    <input
      placeholder="Product name"
      className="filter"
      onChange={(e) => setSearchName(e.target.value)}
      type="text"
    />
  );
}

export { Filter };
