import authenticate from "../../../middleware/auth";
import { uploadBuffer } from "../../../utils/s3";

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      await handlePostRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   POST api/location/locationMap
// @desc    retrieve location map given lat and lng
// @res     url of location map
// @access  Protected
async function handlePostRequest(req, res) {
  try {
    const { lat, lng } = req.body;
    if (typeof lat !== "number" || typeof lng !== "number") {
      return res.status(400).send("lat and lng must be numbers");
    }

    // HERE Map Image v3. The old endpoint (image.maps.ls.hereapi.com/mia/1.6)
    // is part of HERE's retired legacy service tier.
    // The v1.6 `u=1500` uncertainty circle has no direct v3 equivalent; the
    // approximate position is now conveyed by the zoom level alone.
    const url =
      `https://image.maps.hereapi.com/mia/v3/base/mc/center:` +
      `${lat.toFixed(2)},${lng.toFixed(2)};zoom=13/800x400/png` +
      `?apiKey=${process.env.HERE_API_KEY}`;

    // `request` was deprecated in 2020; fetch is native in Node 18+.
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        "HERE map image request failed:",
        response.status,
        await response.text()
      );
      return res.status(502).send("Could not generate location map");
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const location = await uploadBuffer(
      `map-${Date.now()}`,
      buffer,
      "image/png"
    );

    // The old implementation nested the S3 upload inside a `request` callback,
    // so a failure there escaped this try/catch and hung the request.
    res.status(200).send(location);
  } catch (err) {
    console.error("locationMap error:", err);
    res.status(500).send("Server Error");
  }
}

export default authenticate(handler);
