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

// @route   POST api/location/locationForm
// @desc    retrieve user location with developer.here api and form
// @res     address = { lat, lng, label, country, state, county, city, district, postalCode }
// @access  Public
async function handlePostRequest(req, res) {
  const { value } = req.body;

  if (!value || typeof value !== "string") {
    return res.status(400).send("A search value is required");
  }

  // HERE Geocoding & Search v7. The old endpoint
  // (geocoder.ls.hereapi.com/6.2/geocode.json) is part of HERE's retired legacy
  // service tier. v7 returns a flat `items[]` array instead of
  // Response.View[0].Result[0].Location.
  const url = "https://geocode.search.hereapi.com/v1/geocode";

  try {
    const { data } = await axios.get(url, {
      params: {
        q: value,
        limit: 1,
        lang: "en-US",
        apiKey: process.env.HERE_API_KEY,
      },
    });

    const item = data.items && data.items[0];
    if (!item) return res.status(404).send("No location found");

    const a = item.address;

    // NOTE: the v6 version of this route assigned `country:` twice -- once from
    // Country and again from County -- so the country code was silently
    // overwritten by the county name and `county` was never returned at all.
    res.json({
      lat: item.position.lat,
      lng: item.position.lng,
      label: a.label,
      country: a.countryCode,
      state: a.stateCode || a.state,
      county: a.county,
      city: a.city,
      district: a.district,
      postalCode: a.postalCode,
    });
  } catch (err) {
    console.error("HERE geocode failed:", err.response?.data || err.message);
    res.status(500).send("Server Error");
  }
}

export default handler;
