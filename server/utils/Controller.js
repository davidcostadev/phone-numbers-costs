const Controller = service => async (req, res) => {
  try {
    res.json(await service(req));
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};

module.exports = Controller;
