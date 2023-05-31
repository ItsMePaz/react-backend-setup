import Person from "../model/Person.js";

async function getPersons(req, res) {
  Person.find({}).then((persons) => {
    res.status(200).json(persons);
  });
}

async function getPerson(req, res) {
  const id = req.params.id;
  const person = await Person.findById(id);
  return res.json(person);
}

async function createPerson(req, res) {
  const { name, number } = req.body;
  const person = new Person({
    name,
    number,
  });

  const savePerson = await person.save();

  return res.status(201).json(savePerson);
}

async function deletePerson(req, res) {
  const id = req.params.id;
  await Person.findByIdAndDelete(id);
  res.status(204).end();
}

async function updatePerson(req, res) {
  const id = req.params.id;
  const { name, number } = req.body;
  const person = {
    name,
    number,
  };

  const updatePerson = await Person.findByIdAndUpdate(id, person);

  res.json(updatePerson);
}

export default {
  getPersons,
  getPerson,
  createPerson,
  deletePerson,
  updatePerson,
};
