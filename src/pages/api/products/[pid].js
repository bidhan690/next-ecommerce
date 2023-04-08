export default async function RProducts(req, res) {
  const { pid } = req.query;
  const items = await filterData(pid);
  if (items.length === 0) {
    return res.status(404).json({ message: "Items not found!" });
  }
  res.status(200).json({ items });
}

async function filterData(item) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const results = await data.filter((items) => {
      return (
        item &&
        items &&
        items.name &&
        items.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .includes(item.toLowerCase())
      );
    });
    return results;
  } catch (err) {
    throw new Error("Fetch failed");
  }
}
