import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Pagination from 'react-bootstrap/Pagination';

const Paging = ({
  paginate,
  toPrevPage,
  toNextPage,
  setShopPerPage,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  let active = currentPage;
  let pageNumbers = [];
  for (let number = 1; number <= totalPages; number++) {
    pageNumbers.push(
      <Pagination.Item
        onClick={() => paginate(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  const lastPage = () => {
    paginate(totalPages);
  };

  return (
    <div className="m-3">
      <DropdownButton
        className="d-flex flex-wrap justify-content-center align-content-center"
        variant="dark mb-3"
        id="dropdown-basic-button"
        title="Display on page"
      >
        <Dropdown.Item onClick={() => setShopPerPage(24)}>24</Dropdown.Item>
        <Dropdown.Item onClick={() => setShopPerPage(36)}>36</Dropdown.Item>
        <Dropdown.Item onClick={() => setShopPerPage(48)}>48</Dropdown.Item>
      </DropdownButton>
      <Pagination className="d-flex justify-content-center ">
        <Pagination.First onClick={() => setCurrentPage(1)} />
        <Pagination.Prev onClick={toPrevPage} disabled={currentPage === 1} />
        {pageNumbers}
        <Pagination.Next
          onClick={toNextPage}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last onClick={lastPage} />
      </Pagination>
    </div>
  );
};

export { Paging };
