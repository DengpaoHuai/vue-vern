import { Butter } from "../types/butter";
import { crudcrud } from "./instances/crudcrud";

export const createButter = async (butter: Omit<Butter, "_id">) => {
  const response = await crudcrud.post("/butter", butter);
  return response.data;
};

export const getButters = async (): Promise<Butter[]> => {
  const response = await crudcrud.get("/butter");
  return response.data;
};

export const deleteButter = async (id: string) => {
  await crudcrud.delete(`/butter/${id}`);
};
