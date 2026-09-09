import axios from "axios";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// Vercel resolves the visitor's location at the edge and passes it through as
// request headers. That is free, adds no latency, needs no API key, and avoids
// sending anything over the wire -- so it is preferred over ipstack, which is
// only kept as a fallback for non-Vercel hosting.
function locationFromVercelHeaders(req) {
  const h = req.headers;
  const lat = h["x-vercel-ip-latitude"];
  const lng = h["x-vercel-ip-longitude"];
  if (!lat || !lng) return null;

  const decode = (v) => (v ? decodeURIComponent(v) : undefined);

  return {
    country: h["x-vercel-ip-country"],
    state: h["x-vercel-ip-country-region"],
    city: decode(h["x-vercel-ip-city"]),
    postalCode: h["x-vercel-ip-postal-code"],
    lat: Number(lat),
    lng: Number(lng),
  };
}

// @route   GET api/location/ip
// @desc    Get user Location from the request's IP address
// @res     address = { country, state, city, postalCode, lat, lng }
// @access  Public
async function handleGetRequest(req, res) {
  const fromEdge = locationFromVercelHeaders(req);
  if (fromEdge) return res.json(fromEdge);

  if (!process.env.IPSTACK_ACCESS_KEY) {
    return res.status(204).end();
  }

  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(",")[0].trim()
    : req.socket?.remoteAddress;

  // No useful answer for a loopback address in local development.
  if (!ip || ip === "::1" || ip === "127.0.0.1") {
    return res.status(204).end();
  }

  try {
    // https, not http: the free ipstack tier is http-only, which put the API
    // key on the wire in plaintext. https requires a paid ipstack plan.
    const { data } = await axios.get(`https://api.ipstack.com/${ip}`, {
      params: { access_key: process.env.IPSTACK_ACCESS_KEY },
    });

    if (data.error) {
      console.error("ipstack error:", data.error);
      return res.status(502).send("Could not resolve location");
    }

    res.json({
      country: data.country_code,
      state: data.region_code,
      city: data.city,
      postalCode: data.zip,
      lat: data.latitude,
      lng: data.longitude,
    });
  } catch (err) {
    console.error("ipstack request failed:", err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
