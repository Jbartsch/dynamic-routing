export default (req, res) => {
  const {
    query: { id, filter }
  } = req;

  res.end(`Post: ${id} ${filter}`);
};
