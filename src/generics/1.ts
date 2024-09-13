// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними.
//  Використовуйте Generics для типізації повернутих даних.

import axios from "axios";

async function fetchData<T extends object>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
