import mongoose from "mongoose";

const uri = process.env.DATABASE_URL;

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalForMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cache = (globalForMongoose.mongooseCache ??= {
  connection: null,
  promise: null,
});

export async function connectToDatabase() {
  if (!uri) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (cache.connection) return cache.connection;

  cache.promise ??= mongoose.connect(uri, { bufferCommands: false });
  try {
    cache.connection = await cache.promise;
    return cache.connection;
  } catch (error) {
    cache.promise = null;
    throw error;
  }
}
