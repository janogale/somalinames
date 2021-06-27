import db from "../utils/db";

export default async function getAll(req, res) {
  try {
    const entries = await db.collection("somalinames").get();
    const entriesData = entries.docs.map((entry) => ({
      _id: entry.id,
      ...entry.data(),
    }));

    res.status(200).json(entriesData);
  } catch (e) {
    res.status(400).end();
  }
}
