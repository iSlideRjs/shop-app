import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Filter({ setSearchName }) {
  return (
    <InputGroup className="mb-2 rounded-1 filter">
      <Form.Control
        className="rounded-5"
        placeholder="Product name"
        aria-label="Product name"
        aria-describedby="basic-addon2"
        onChange={(e) => setSearchName(e.target.value)}
      />
    </InputGroup>
  );
}

export { Filter };
