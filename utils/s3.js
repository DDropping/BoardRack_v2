// AWS SDK v3. The v2 `aws-sdk` package reached end-of-support in September 2025
// and no longer receives security patches.
//
// This module is the single place the S3 client is constructed; it previously
// existed twice (utils/AWSPresigner.js and pages/api/location/locationMap.js),
// and the second copy silently omitted the region.
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  },
});

const Bucket = process.env.S3_BUCKET;

const EXPIRES_IN = 120; // seconds

// NOTE: uploads used to be signed with `ACL: "public-read"`. S3 has blocked
// public ACLs by default since April 2023, so objects are now expected to be
// readable via a bucket policy instead. Both the presigner and the browser
// upload in utils/uploadFileToBucket.js dropped the ACL together -- if only one
// side sends it, S3 rejects the request with a signature mismatch.

export function generateGetUrl(Key) {
  return getSignedUrl(s3, new GetObjectCommand({ Bucket, Key }), {
    expiresIn: EXPIRES_IN,
  });
}

export function generatePutUrl(Key, ContentType) {
  return getSignedUrl(s3, new PutObjectCommand({ Bucket, Key, ContentType }), {
    expiresIn: EXPIRES_IN,
  });
}

// v3's PutObjectCommand response has no `.Location`, so the public URL is built
// from the configured base rather than read back off the result.
export async function uploadBuffer(Key, Body, ContentType) {
  await s3.send(new PutObjectCommand({ Bucket, Key, Body, ContentType }));
  return `${process.env.S3_PUBLIC_URL}/${Key}`;
}

export default s3;
