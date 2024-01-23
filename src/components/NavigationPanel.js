import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavigationPanel() {
  return (
    <div>
     <Navbar className="bg-body-tertiary" data-bs-theme="dark">
        <Container className="justify-content-center">
          <Navbar.Brand>Rental Management Application</Navbar.Brand>
        </Container>
     </Navbar>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add Rentals">
      </Tab>
      <Tab eventKey="profile" title="View Rentals">
      </Tab>
      <Tab eventKey="contact" title="Get rental summary">
      </Tab>
    </Tabs>
    </div>
  );
}

export { NavigationPanel };