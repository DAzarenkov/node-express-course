let { people } = require("../data");

function addPerson(req, res) {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name" });
  }
  people.push({ id: people.length + 1, name });

  res.status(201).json({ success: true, name });
}

function getPeople(req, res) {
  res.json(people);
}

function getPerson(req, res) {
  const personId = parseInt(req.params.id);

  const person = people.find((p) => {
    return p.id === personId;
  });

  if (!person) {
    return res.status(404).json({ message: "Person not found." });
  }

  res.json(person);
}

function updatePerson(req, res) {
  const personId = parseInt(req.params.id);
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a name" });
  }

  const person = people.find((p) => {
    return p.id === personId;
  });

  if (!person) {
    return res.status(404).json({ message: "Person not found." });
  }

  people = people.map((p) => {
    if (p.id === personId) {
      p.name = name;
    }

    return p;
  });

  res.json({ message: "Person was successfully updated." });
}

function deletePerson(req, res) {
  const personId = parseInt(req.params.id);

  people = people.filter((p) => {
    return p.id !== personId;
  });

  res.json({ message: "Person was successfully deleted" });
}

module.exports = {
  addPerson,
  getPeople,
  getPerson,
  updatePerson,
  deletePerson,
};
