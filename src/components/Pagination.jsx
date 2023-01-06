import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Pagination = ({
  shopPerPage,
  totalShop,
  paginate,
  prevPage,
  nextPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalShop / shopPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="d-flex flex-wrap justify-content-center align-content-center m-3">
      <Button
        className="me-1 rounded-4"
        onClick={prevPage}
        variant="outline-primary"
      >
        Prev
      </Button>
      {pageNumbers.map((number) => (
        <ButtonGroup key={number} className="me-1" aria-label="First group">
          <Button
            onClick={() => paginate(number)}
            variant="secondary rounded-3"
          >
            {number}
          </Button>
        </ButtonGroup>
      ))}
      <Button
        onClick={nextPage}
        variant="outline-primary"
        className="rounded-4"
      >
        Next
      </Button>
    </div>
  );
};

export { Pagination };
