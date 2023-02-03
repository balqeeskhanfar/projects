import React from "react";
import Link from "next/link";
import Image from "next/image";
import azureIcon from "../azure-icon.png";
import ItemForm from "../../components/ItemForm";
import FetchItem from "../../components/fetchItem";

const fetchProject = async (id) => {
    const res = await fetch(
        `https://dev.azure.com/${process.env.NEXT_PUBLIC_ORGANIZATION}/_apis/projects/${id}?api-version=6.0`,
        {
            method: "GET",
            headers: {
                Authorization: `Basic ${btoa(
                    process.env.NEXT_PUBLIC_PERSONAL_KEY
                )}`,
                "Content-Type": "application/json",
            },
        }
    );
    const project = await res.json();
    return project;
};

export default async function ProjectPage({ params: { projectId } }) {
    const fetchItems = async () => {
        let items = {};
        const res = await fetch(
            `https://dev.azure.com/${process.env.NEXT_PUBLIC_ORGANIZATION}/${projectId}/_apis/wit/wiql?api-version=6.0`,
            {
                method: "POST",
                headers: {
                    Authorization: `Basic ${btoa(
                        process.env.NEXT_PUBLIC_PERSONAL_KEY
                    )}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query: "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.WorkItemType] = 'Task'",
                }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                items = data.workItems;
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        return items;
    };

    const project = await fetchProject(projectId);

    const items = await fetchItems();

    return (
        <>
            <div>{projectId}</div>
            <p>{project.description}</p>
            <p>{project.visibility}</p>
            <button className=" w-10 self-end">
                <Link
                    href={`https://dev.azure.com/balqeeskhanfar/${project.name}`}
                >
                    <Image alt="leeerob" src={azureIcon} />
                </Link>
            </button>
            <div className=" w-auto flex flex-wrap justify-center">
                {items &&
                    items.map((item) => {
                        return <FetchItem item={item} key={item.id} />;
                    })}
            </div>
            <ItemForm projectId={projectId} />
        </>
    );
}
