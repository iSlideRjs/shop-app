import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context';

function Sorting({
  sortingPrice = Function.prototype,
  sortingName = Function.prototype,
  sortingRelevance = Function.prototype,
}) {
  const { sortOrderPrice, sortOrderName } = useContext(ShopContext);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Relevance', value: '1' },
    { name: sortOrderPrice, value: '2' },
    { name: sortOrderName, value: '3' },
  ];
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center pb-2 pt-2">
        <ButtonGroup aria-label="Basic example">
          <button className="sortingBy">Sorting by:</button>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="dark"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              onClick={() => {
                if (radio.value === '1') {
                  sortingRelevance();
                } else if (radio.value === '2') {
                  sortingPrice('price');
                } else if (radio.value === '3') {
                  sortingName('displayName');
                }
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>

      <hr className="sortingBorder" />
    </Container>
  );
}

export { Sorting };
