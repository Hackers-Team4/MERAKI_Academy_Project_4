const roleModel = require("./../../db/models/Role");

const createRole = (req, res) => {
  const { role, permission } = req.body;
  const newRole = new roleModel({ role, permission });
  newRole
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const updateRole = (req, res) => {
  const id = req.params.id;
  roleModel.findOneAndUpdate({ _id: id },{role, permission}=req.body,{new:true}).then((result) => {
    res.status(200).json(result);
  }).catch((err) => {res.status(404).json(err)})
};
module.exports = {
  createRole,
  updateRole,
};
