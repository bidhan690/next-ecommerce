export default function RProducts(req, res) {
  const { pid } = req.query;
  res.json({ Post: pid });
}
