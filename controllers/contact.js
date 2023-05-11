const db = require('../models');
const Contact = db.contacts;

const apiKey =
  'Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N';

exports.create = (req, res) => {
  /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68Xwaj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
  */
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }

  // Create 
  const contact = new  Contact ({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    favorite_color: req.body.favorite_color,
    birthday: req.body.birthday
    });
  // Save 
  contact
    .save(contact)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the contact.',
      });
    });
};

exports.findAll = (req, res) => {
  /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
  */
  console.log(req.header('apiKey'));
  if (req.header('apiKey') === apiKey) {
    Contact.find(
      {},
      {
  
        name: 1,
        location: 1,
        dedicated: 1,
        additionalInfo: 1,
        _id: 0,
      }
    )
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while retrieving.',
        });
      });
  } else {
    res.send('Invalid apiKey, please read the documentation.');
  }
};

// Find a single Temple with an id
exports.findOne = (req, res) => {
  /*
    #swagger.description = 'API Key if needed: Ezl0961tEpx2UxTZ5v2uKFK91qdNAr5npRlMT1zLcE3Mg68XwZj3N8Dyp1R8IvFenrVwHRllOUxF0Og00l0m9NcaYMtH6Bpgdv7N'
  */
  const contact_id = req.params.temple_id;
  if (req.header('apiKey') === apiKey) {
    Contact.find({ _id: _id })
      .then((data) => {
        if (!data)
          res
            .status(404)
            .send({ message: 'Not found Temple with id ' + contact_id });
        else res.send(data[0]);
      })
      .catch((err) => {
        res.status(500).send({
          message: 'Error retrieving Temple with contact_id=' + contact_id,
        });
      });
  } else {
    res.send('Invalid apiKey, please read the documentation.');
  }
};