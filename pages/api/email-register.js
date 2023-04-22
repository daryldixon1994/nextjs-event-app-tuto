import path from "path";
import fs from "fs";
function buildPath() {
  let absPath = path.resolve("data", "data.json");
  return absPath;
}
function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}
let filePath = buildPath();
const { events_categories, allEvents } = extractData(filePath);

export default function handler(req, res) {
  const { method } = req;
  if (!allEvents) {
    return res
      .status(404)
      .json({ status: false, message: "No data are available" });
  }
  if (method === "POST") {
    let { email, eventId } = req.body;
    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res
            .status(409)
            .json({ message: "This email has already been registered" });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(201).json({
      message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
    });
  }
}
