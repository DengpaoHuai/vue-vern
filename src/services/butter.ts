import { crudcrud } from "./instances/crudcrud";

export const createButter = async (butter) => {
  const response = await crudcrud.post("/butter", butter);
  return response.data;
};
