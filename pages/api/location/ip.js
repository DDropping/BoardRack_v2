import axios from 'axios';

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await handleGetRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

// @route   GET api/externalAPI/getApproximateLocation
// @desc    Get user Location with user IP address
// @res     address = { lat, lng, Country, Region, City, PostalCode }
// @access  Public
async function handleGetRequest(req, res) {
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

  try {
    if (ip === '::1' || ip === '127.0.0.1') {
    } else {
      const approxLocation = await axios.get(
        `http://api.ipstack.com/${ip}?access_key=${process.env.IPSTACK_ACCESS_KEY}`
      );

      //setup response
      const {
        country_code,
        region_code,
        city,
        zip,
        latitude,
        longitude
      } = approxLocation.data;

      const location = {
        country: country_code,
        state: region_code,
        city: city,
        postalCode: zip,
        lat: latitude,
        lng: longitude
      };

      res.json(location);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}
