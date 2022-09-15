/* eslint-disable import/no-anonymous-default-export */

export default function (req, res) {
  return res.status(200).json({ message: "API has been successfully called" });
}

