import axios from "axios";

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

// @route   POST api/location/geo
// @desc    retrieve user location with developer.here api and geolocation
// @res     address = { lat, lng, country, state, county, city, district, postalCode }
// @access  Public
async function handlePostRequest(req, res) {
  const { lat, lng } = req.body;

  if (typeof lat !== "number" || typeof lng !== "number") {
    return res.status(400).send("lat and lng must be numbers");
  }

  // HERE Geocoding & Search v7. The old endpoint
  // (reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json) is part of HERE's
  // retired legacy service tier. v7 returns a flat `items[]` array instead of
  // Response.View[0].Result[0].Location.Address.
  const url = "https://revgeocode.search.hereapi.com/v1/revgeocode";

  try {
    const { data } = await axios.get(url, {
      params: {
        at: `${lat},${lng}`,
        limit: 1,
        lang: "en-US",
        apiKey: process.env.HERE_API_KEY,
      },
    });

    const item = data.items && data.items[0];
    if (!item) return res.status(404).send("No address found for coordinates");

    const a = item.address;
    res.json({
      lat,
      lng,
      country: a.countryCode,
      state: a.stateCode || a.state,
      county: a.county,
      city: a.city,
      district: a.district,
      postalCode: a.postalCode,
    });
  } catch (err) {
    console.error("HERE revgeocode failed:", err.response?.data || err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
