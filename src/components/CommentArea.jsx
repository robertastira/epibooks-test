import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



componentDidMount = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/")
      if(response.ok) {
        const data = await response.json()
        this.setState({ reservations: data })
      } else {
        console.log('error') }
      }
    catch(e) {
      console.log(e)
    }
  }

function FormComments() {
  return (
    <Form>
    <h2>Commenti</h2>
    <Form.Group className="mb-3">
                <Form.Label>Recensioni</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={this.state.comments}
                />
              </Form.Group>
              <Form.Label>Nuovo commento</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Inserisci il commento qui"
                />
              </Form.Group>
    </Form>
  );
}

export default FormComments;