const request = require('request');
const AWS = require('aws-sdk');

var s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
});

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
    var lat = req.body.lat.toFixed(2);
    var lng = req.body.lng.toFixed(2);
    var url = `https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=${process.env.HERE_API_KEY}&c=${lat},${lng}&z=13&w=800&h=400&u=1500`;
    console.log(url);
    request({ url, encoding: null }, (err, resp, buffer) => {
      s3.upload({
        Bucket: process.env.S3_BUCKET,
        ACL: 'public-read',
        Key: Date.now().toString(),
        Body: buffer
      })
        .promise()
        .then(data => res.send(data.Location));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}
