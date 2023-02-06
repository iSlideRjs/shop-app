import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';

function Sorting({ sortingPrice = Function.prototype, sortOrderPrice }) {
  return (
    <Container>
      <div className="d-flex align-items-center">
        <ButtonGroup aria-label="Basic example">
          <Button variant="warning ms-3">Sorting by:</Button>
          <Button onClick={() => sortingPrice('price')} variant="dark">
            {sortOrderPrice}
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export { Sorting };
