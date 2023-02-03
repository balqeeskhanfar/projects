"use client";

import React, { useState } from "react";

export default function ItemForm({ projectId }) {
    const [name, setName] = useState("");

    const create = async () => {
        await fetch(
            `https://dev.azure.com/${process.env.NEXT_PUBLIC_ORGANIZATION}/${projectId}/_apis/wit/workitems/$Task?api-version=7.0`,
            {
                method: "POST",
                headers: {
                    Authorization: `Basic ${btoa(
                        process.env.NEXT_PUBLIC_PERSONAL_KEY
                    )}`,
                    "Content-Type": "application/json-patch+json",
                },
                body: JSON.stringify([
                    {
                        op: "add",
                        path: "/fields/System.Title",
                        from: null,
                        value: name,
                    },
                ]),
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
