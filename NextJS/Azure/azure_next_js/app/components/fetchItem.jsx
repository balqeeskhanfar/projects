import React from "react";
import ItemCard from "./ItemCard";

const fetchItem = async (item) => {
    let cardItem = {};
    const res = await fetch(`${item.url}`, {
        method: "GET",
        headers: {
            Authorization: `Basic ${btoa(
                process.env.NEXT_PUBLIC_PERSONAL_KEY
            )}`,
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
            cardItem = data;
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    return cardItem;
};

export default async function FetchItem({ item }) {
    const cardItem = await fetchItem(item);

    return (
        <div>
            <ItemCard item={cardItem} />
        </div>
    );
}
