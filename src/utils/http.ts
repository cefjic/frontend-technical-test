import axios from "axios";

// Used ad SWR fetcher : https://swr.vercel.app/docs/data-fetching#axios
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
