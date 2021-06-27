// import controllers

import { getAll } from "../../../../controllers";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      getAll(req, res);
      break;
    case "POST":
      //...
      break;
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
}
