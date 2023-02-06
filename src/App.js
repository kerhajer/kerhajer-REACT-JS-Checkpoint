
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function App() {
  return (
    
    <div className="App">
     
    <h1>Hello </h1>

    <Form className="formm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control className="formla" type="Name" placeholder="hejer" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age:</Form.Label>
        <Form.Control className="formla" type="age" placeholder="32 years old" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Work:</Form.Label>
        <Form.Control className="formla" type="text area" placeholder="Engineer Textile and Student Web Developer" />
      </Form.Group>
     
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;
