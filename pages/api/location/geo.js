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
  const { lat, lng } = req.body;
  const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=${lat}%2C${lng}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=${process.env.HERE_API_KEY}`;
  try {
    const location = await axios.get(url);

    //setup response
    const {
      Country,
      State,
      County,
      City,
      District,
      PostalCode
    } = location.data.Response.View[0].Result[0].Location.Address;

    const address = {
      lat,
      lng,
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
