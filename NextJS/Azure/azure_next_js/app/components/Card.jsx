"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import azureIcon from "../projects/azure-icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Card({ project }) {
    const deleteProject = async () => {
        await fetch(
            `https://dev.azure.com/${process.env.NEXT_PUBLIC_ORGANIZATION}/_apis/projects/${project.id}?api-version=6.0`,
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
            <button className="w-4 self-end" onClick={deleteProject}>
                <FontAwesomeIcon icon={faXmark} className="text-red-500" />
            </button>

            <div className=" pr-2">
                <Link
                    href={`/projects/${project.name}`}
                    className=" font-medium"
                >
                    {project.name}
                </Link>
                <p className=" text-gray-600 text-[14px]">
                    {project.visibility}
                </p>
                {project.description.length > 66 && (
                    <p className="text-[12px]">
                        {project.description.slice(0, 62) + "..."}
                    </p>
                )}
                {project.description.length < 66 && (
                    <p className="text-[12px]">{project.description}</p>
                )}
            </div>

            <button className=" w-4 self-end">
                <Link
                    href={`https://dev.azure.com/balqeeskhanfar/${project.name}`}
                >
                    <Image alt="leeerob" src={azureIcon} />
                </Link>
            </button>
        </div>
    );
}
