import db from "../utils/db";

export default async function getOne(req, res) {
  const { id } = req?.query;

  if (!id) {
    return res.status(400).send({ message: "Id is missing" });
  }

  try {
    const entry = await db.collection("somalinames").doc(id).get();

    return res.status(200).json({ _id: entry.id, ...entry.data() });
  } catch (e) {
    res.status(400).end();
  }
}
