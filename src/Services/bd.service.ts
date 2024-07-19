import { type User } from "../types/types";
import { Sandbox } from "../utils/utils";

const url = import.meta.env.VITE_URL_SERVICE;

export const get_Items = async () => {
  return await Sandbox(
    async () => {
      const result = await fetch(`${url}/users/get_users`);
      const { data }: { data: User[] | null } = await result.json();
      return data;
    },
    () => null
  );
};

export const get_one_item = async (id: string) => {
  return await Sandbox(
    async () => {
      const result = await fetch(`${url}/users/get_one/${id}`);
      const { data }: { data: User | null } = await result.json();
      return data;
    },
    () => null
  );
};

export const create_item = async (user: User) => {
  return await Sandbox(
    async () => {
      const usuario = {
        dni: user.dni,
        nombre: user.nombre,
        edad: user.edad,
      };
      await fetch(`${url}/users/create_user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return true;
    },
    async () => false
  );
};

export const update_item = async (id: string, user: User) => {
  return await Sandbox(
    async () => {
      const usuario = {
        dni: user.dni,
        nombre: user.nombre,
        edad: user.edad,
      };

      await fetch(`${url}/users/update_user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      return true;
    },
    async () => false
  );
};

export const delete_item = async (id: string) => {
  return await Sandbox(
    async () => {
      await fetch(`${url}/users/delete_user/${id}`);
      return true;
    },
    async () => false
  );
};
