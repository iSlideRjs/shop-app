import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Pagination = ({
  shopPerPage,
  totalShop,
  paginate,
  prevPage,
  nextPage,
  setShopPerPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalShop / shopPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="m-3">
      <DropdownButton
        className="d-flex flex-wrap justify-content-center align-content-center"
        variant="dark"
        id="dropdown-basic-button"
        title="Display on page"
      >
        <Dropdown.Item onClick={() => setShopPerPage(30)}>30</Dropdown.Item>
        <Dropdown.Item onClick={() => setShopPerPage(40)}>40</Dropdown.Item>
        <Dropdown.Item onClick={() => setShopPerPage(50)}>50</Dropdown.Item>
      </DropdownButton>
      <span className="d-flex justify-content-center align-content-center m-2">
        {pageNumbers.map((number) => (
          <ButtonGroup key={number} aria-label="First group">
            <Button
              className="ms-1 me-1"
              onClick={() => paginate(number)}
              variant="secondary rounded-3"
            >
              {number}
            </Button>
          </ButtonGroup>
        ))}{' '}
      </span>
      <span className="d-flex justify-content-center align-content-center m-2">
        <Button
          disabled={currentPage === 1}
          className="ms-1 me-1 rounded-4"
          onClick={prevPage}
          variant="outline-primary"
        >
          Prev
        </Button>
        <Button
          onClick={nextPage}
          variant="outline-primary"
          className="ms-1 me-1 rounded-4"
        >
          Next
        </Button>
      </span>
    </div>
  );
};

export { Pagination };
