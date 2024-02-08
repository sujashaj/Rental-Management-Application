import Table from 'react-bootstrap/Table';
import { useRentalContext } from '../context/RentalContext';
import { SortableTable } from './SortableTable';
import Container from 'react-bootstrap/Container';



function ViewRentals(data) {
  const { state, setState } = useRentalContext();

  return (
  <Container>
    <SortableTable data={state.rentalProperties} columns={state.rentalColumns} />
  </Container>
  );
}

export { ViewRentals };