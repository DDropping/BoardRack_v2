import { generateGetUrl } from '../../../utils/AWSPresigner';

export default async (req, res) => {
  const { Key } = req.query;
  generateGetUrl(Key)
    .then(getURL => {
      res.send(getURL);
    })
    .catch(err => {
      res.send(err);
    });
};
