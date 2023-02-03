import { useInfiniteQuery } from "react-query";
import { API_READ_ACCESS_TOKEN } from "@env";

export default function useFetchSerise(url) {
    const getSerise = async ({ pageParam = 1 }) => {
        const res = await (
            await fetch(
                `https://api.themoviedb.org/3/${url}/popular?language=en-US&page=${pageParam}`,
                {
                    headers: {
                        method: "GET",
                        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`,
                        "Content-Type": "application/json;charset=utf-8",
                    },
                }
            )
        ).json();
        return {
            data: res.results,
            nextPage: pageParam + 1,
        };
    };

    return useInfiniteQuery([url], getSerise, {
        getNextPageParam: (lastPage) => {
            if (lastPage.data.length == 0) return undefined;
            return lastPage.nextPage;
        },
    });
}
