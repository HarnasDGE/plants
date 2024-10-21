import { usersDb } from "../data/usersDb";

export const getAuthorById = (authorId) => {
  return usersDb.find((user) => user.id === authorId);
};
