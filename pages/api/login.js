export default function handler(req, res) {
  let { email } = req.body;
  console.log("email :", email);
  res.status(200).json({ message: "hello" });
}
