import axios from "axios";
export async function getFetch(url, params = {}) {
  const res = await axios({
        url: url,
        method: "GET",
        params: params,
    });
    return res.data;
}
