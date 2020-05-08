import { generatePutUrl } from "../../../utils/AWSPresigner";

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

async function handleGetRequest(req, res) {
  const { Key, ContentType } = req.query;
  generatePutUrl(Key, ContentType)
    .then((putURL) => {
      res.send({ putURL });
    })
    .catch((err) => {
      res.send(err);
    });
}

export default handler;
