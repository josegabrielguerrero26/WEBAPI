const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  const result = await mongodb.getDb().db('test').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('test').collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createContact = async (req, res) => {
  const contact = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    favorite_color: req.body.favorite_color,
    birthday: req.body.birthday
    };
  const response = await mongodb.getDb().db('test').collection('contacts').insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    favorite_color: req.body.favorite_color,
    birthday: req.body.birthday
  };
  const response =  await mongodb
    .getDb()
    .db('test')
    .collection('contacts')
    .replaceOne({ _id: userId },contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Error.');
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result =  await mongodb.getDb().db('test').collection('contacts').remove({ _id: userId }, true);
  console.log(result);
  if (result.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(result.error || 'Error.');
  }
};


module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
};