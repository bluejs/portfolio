import axios from "axios";

export async function fetchData(url: string) {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (e) {
    console.error('network error:', e);
    throw e;
  }
}
