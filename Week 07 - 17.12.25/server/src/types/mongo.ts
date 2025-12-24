import { Collection } from "mongodb";
import { User } from "./user";

export interface MongoCollections {
  users: Collection<User>;
}
