// import controllers

import { getOne } from "../../../../controllers";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      getOne(req, res);
      break;
    case "POST":
      //...
      break;
    default:
      res.status(405).end(); //Method Not Allowed
      break;
  }
}
