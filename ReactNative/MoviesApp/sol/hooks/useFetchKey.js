import { useQuery } from "react-query";
import { API_READ_ACCESS_TOKEN } from "@env";

export default function useFetchKey(url, id) {
    const getSerise = async () => {
        const res = await (
            await fetch(
                `https://api.themoviedb.org/3/${url}/${id}/videos?language=en-US`,
                {
                    headers: {
                        method: "GET",
                        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
                        "Content-Type": "application/json;charset=utf-8",
                    },
                }
            )
        ).json();
        return res.results[0].key;
    };
    return useQuery([id], getSerise);
}
