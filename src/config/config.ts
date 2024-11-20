import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_DATABSE = process.env.MONGO_DATABASE || '';
let mongoUrl = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_DATABSE}`;

console.log(process.env.MONGO_LOCAL);
if (process.env.MONGO_LOCAL === 'true') {
    mongoUrl = 'mongodb://mongodb:27017';
}

const SERVER_PORT = process.env.SERVER_PORT
    ? Number(process.env.SERVER_PORT)
    : 3000;

export const config = {
    mongo: {
        url: mongoUrl,
    },
    server: {
        port: SERVER_PORT,
    },
};
