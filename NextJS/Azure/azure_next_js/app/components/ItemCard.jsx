"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import azureIcon from "../projects/azure-icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ItemCard({ item }) {
    const deleteItem = async () => {
        await fetch(
            `https://dev.azure.com/${process.env.NEXT_PUBLIC_ORGANIZATION}/${item.fields["System.AreaPath"]}/_apis/wit/workitems/${item.id}?api-version=7.0`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Basic ${btoa(
                        process.env.NEXT_PUBLIC_PERSONAL_KEY
                    )}`,
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="p-5 pt-1 pr-3 pb-2 bg-blue-400 w-40 h-40 m-6 rounded-lg flex flex-col items-start justify-between">
            <button className="w-4 self-end" onClick={deleteItem}>
                <FontAwesomeIcon icon={faXmark} className="text-red-500" />
            </button>

            <div className=" pr-2">
                <h4>{item.fields["System.Title"]}</h4>
                <p className=" text-gray-600 text-[14px]">
                    {item.fields["System.TeamProject"]}
                </p>
                {item.fields["System.Description"] &&
                    item.fields["System.Description"].length > 66 && (
                        <div
                            dangerouslySetInnerHTML={{
                                __html:
                                    item.fields["System.Description"].slice(
                                        0,
                                        62
                                    ) + "...",
                            }}
                            className="text-[12px]"
                        />
                    )}
                {item.fields["System.Description"] &&
                    item.fields["System.Description"].length < 66 && (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: item.fields["System.Description"],
                            }}
                            className="text-[12px]"
                        />
                    )}
            </div>

            <button className=" w-4 self-end">
                <Link
                    href={`https://dev.azure.com/${process.env.NEXT_PUBLIC_ORGANIZATION}/${item.fields["System.AreaPath"]}/_workitems/edit/${item.id}/}`}
                >
                    <Image alt="leeerob" src={azureIcon} className=" w-4" />
                </Link>
            </button>
        </div>
    );
}
