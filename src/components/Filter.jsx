import { useContext, useLayoutEffect } from 'react';
import { ShopContext } from '../context';

function Filter() {
  const { setSearchName, searchName, setLoading } = useContext(ShopContext);
  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    //eslint-disable-next-line
  }, [searchName]);

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
