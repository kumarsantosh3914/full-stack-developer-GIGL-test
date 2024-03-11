const validateUserAuth = (req, res, next) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "Something went wrong",
      err: "Name, Email or password missing in the signup request",
    });
  }
  next();
};
