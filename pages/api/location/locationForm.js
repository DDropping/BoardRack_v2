import axios from 'axios';

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await handlePostRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handlePostRequest(req, res) {
  try {
    const { value } = req.body;
    const encodedValue = encodeURIComponent(value);
    const url = `https://geocoder.ls.hereapi.com/6.2/geocode.json?searchtext=${encodedValue}&gen=9&apiKey=${process.env.HERE_API_KEY}`;
    const location = await axios.get(url);
    console.log(location.data.Response.View[0].Result[0]);

    const {
      Label,
      Country,
      State,
      County,
      City,
      District,
      PostalCode
    } = location.data.Response.View[0].Result[0].Location.Address;

    const {
      Latitude,
      Longitude
    } = location.data.Response.View[0].Result[0].Location.DisplayPosition;

    const address = {
      lat: Latitude,
      lng: Longitude,
      Label,
      Country,
      State,
      County,
      City,
      District,
      PostalCode
    };

    res.json(address);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
}
