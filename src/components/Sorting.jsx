import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';

function Sorting({
  sortingPrice = Function.prototype,
  sortOrderPrice,
  sortingName = Function.prototype,
  sortOrderName,
  sortingRelevance = Function.prototype,
}) {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center pb-2 pt-2">
        <ButtonGroup aria-label="Basic example">
          <Button variant="info">Sorting by:</Button>
          <Button onClick={() => sortingRelevance()} variant="dark">
            Relevance
          </Button>
          <Button onClick={() => sortingPrice('price')} variant="dark">
            {sortOrderPrice}
          </Button>
          <Button onClick={() => sortingName('displayName')} variant="dark">
            {sortOrderName}
          </Button>
        </ButtonGroup>
      </div>

      <hr className="sortingBorder" />
    </Container>
  );
}

export { Sorting };
