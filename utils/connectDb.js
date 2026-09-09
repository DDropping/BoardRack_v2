import mongoose from "mongoose";

// Mongoose 8. The old options object passed useCreateIndex/useFindAndModify,
// which Mongoose 6+ rejects outright (MongoParseError: "options usecreateindex,
// usefindandmodify are not supported"), plus useNewUrlParser/useUnifiedTopology,
// which are now no-ops.
//
// The connection is cached on globalThis rather than in a module-scoped object
// so it survives both Next's dev hot-reload and warm serverless invocations.
// The *promise* is cached, not just the result, so concurrent cold requests
// share one handshake instead of opening a connection each.

if (!process.env.MONGO_SRV && process.env.NODE_ENV === "production") {
  throw new Error("MONGO_SRV environment variable is not set");
}

let cached = globalThis.__mongooseConn;
if (!cached) {
  cached = globalThis.__mongooseConn = { conn: null, promise: null };
}

async function connectDb() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGO_SRV, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
      })
      .then((m) => {
        cached.conn = m;
        return m;
      })
      .catch((err) => {
        // Clear the cached promise so the next request retries instead of
        // resolving against a permanently rejected one.
        cached.promise = null;
        throw err;
      });
  }

  return cached.promise;
}

export default connectDb;
