import { generatePutUrl } from '../../../utils/AWSPresigner';

export default async (req, res) => {
  const { Key, ContentType } = req.query;
  generatePutUrl(Key, ContentType)
    .then(putURL => {
      res.send({ putURL });
    })
    .catch(err => {
      res.send(err);
    });
};
