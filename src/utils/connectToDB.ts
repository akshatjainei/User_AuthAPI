import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connectToDB() {
    const dbUri = config.get<string>('dbUri');
    try {
        await mongoose.connect(dbUri)
        log.info("Connected To DB")
    } catch (error) {
        process.exit(1);
    }
}
export default connectToDB