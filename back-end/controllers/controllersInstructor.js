/**
 * Instructor Controller
 */

module.exports = {
  /* option a selectioner avant signUp*/
  signUp: (req, res) => {
    const { mail, password } = req.body;
    res.status(201).json({ mail, password });
  },
  signIn: (req, res) => {
    console.log(req.body);
    res.status(201).json(req.body);
  },
  dashboard: (req, res) => {
    console.log(req.params.id);
    res.status(201).json({ instructorId: req.params.id });
  },
  flyNow: (req, res) => {
    console.log(req.body);
    res.status(201).json(req.body);
  },
  calendar: (req, res) => {
    console.log(req.body);
    res.status(201).json(req.body);
  },

  profileAdd: (req, res) => {
    console.log(req.body);
    res.status(201).json({ instuctorId: req.body });
  },
  profile: (req, res) => {
    console.log(req.params.id);
    res.status(200).json({ instructorId: req.params.id });
  },
  profileEdit: (req, res) => {
    console.log(req.params.id);
    res.status(201).json({ instructorId: req.params.id });
  },
  profileDelete: (req, res) => {
    console.log(req.params.id);
    res.status(200).send(`instuctor ${req.params.id} a été supprimer`);
  },
};