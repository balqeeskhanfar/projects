"use client";

import Router from "next/router";
import React, { useState } from "react";

export default function ProjectForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const create = async () => {
        await fetch(
            `https://dev.azure.com/${process.env.NEXT_PUBLIC_ORGANIZATION}/_apis/projects?api-version=6.0`,
            {
                method: "POST",
                headers: {
                    Authorization: `Basic ${btoa(
                        process.env.NEXT_PUBLIC_PERSONAL_KEY
                    )}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    description,
                    capabilities: {
                        versioncontrol: {
                            sourceControlType: "Git",
                        },
                        processTemplate: {
                            templateTypeId:
                                "6b724908-ef14-45cf-84f8-768b5384da45",
                        },
                    },
                }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        // setName("");
        // setDescription("");

        Router.reload(window.location.pathname);
    };

    return (
        <div className=" w-auto flex flex-wrap justify-center">
            <form
                onSubmit={create}
                method="post"
                className="flex flex-row mt-3 space-x-2"
            >
                <div>
                    <label>name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className=" border-2 border-gray-200 rounded-sm"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label>description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        className="border-2 border-gray-200 rounded-sm"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="font-bold max-h-[1.8rem] text-[10px] py-2 px-4 rounded bg-blue-400 text-white hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
