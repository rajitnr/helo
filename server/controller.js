module.exports = {
  createUser: (req, res) => {
    const dbInstance = req.app.get("db");
    // console.log("Inside get, dbinstance", dbInstance);
    console.log("Req body is", req.body);
    const { username, password, profile_pic } = req.body;
    dbInstance
      .create_user([username, password, profile_pic])
      .then(user => {
        console.log("User created", user);
        res.status(200).send(user);
      })
      .catch(error => {
        console.log("Error in create", error);
        res.status(500).send(error);
      });
  },
  readUsers: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log("Inside read users");
    dbInstance.read_users().then(users => res.status(200).send(users));
  },
  authenticateUser: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log("Inside authenticate user");
    const { username, password } = req.body;
    dbInstance.authenticate_user([username, password]).then(users => {
      if (users.length > 0) {
        res.status(200).send(users);
      } else {
        res.status(404).send();
      }
    });
  }
};
