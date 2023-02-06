import Button from 'react-bootstrap/Button';

function Sorting({ sorting = Function.prototype, sortOrder }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      Sorting by:
      <Button onClick={() => sorting('displayName')} variant="info ms-1">
        {sortOrder}
      </Button>
    </div>
  );
}

export { Sorting };
