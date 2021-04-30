import React from 'react';

import { Accordion, Card, Button } from 'react-bootstrap';

class Items extends React.Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>

        <Accordion defaultActiveKey="0">

          {
            this.props.itemsList.map((item, idx) =>
              <Card key={idx}>
                <Accordion.Toggle as={Card.Header} eventKey={idx + 1}>
                  {item.name}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={idx + 1}>
                  <>
                    <Card.Body>
                      {item.description}
                    </Card.Body>
                    <Card.Body>
                      <Button data-testid={`delete-button-${item.name}`} onClick={() => this.props.handleDelete(item._id)}>Delete Item</Button>
                    </Card.Body>
                  </>
                </Accordion.Collapse>
              </Card>
            )
          }

        </Accordion>

      </section >
    );
  }
}

export default Items;
