import React from "react";
import Card from "../components/card";
import ProjectForm from "../components/ProjectForm";

const fetchProjects = async () => {
    const res = await fetch(
        `https://dev.azure.com/${process.env.NEXT_PUBLIC_ORGANIZATION}/_apis/projects?api-version=6.0`,
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
    const projects = await res.json();

    return projects;
};

export default async function ProjectsLists() {
    const projects = await fetchProjects();

    return (
        <>
            <div className=" w-auto flex flex-wrap justify-center">
                {projects.value.map((project) => {
                    return <Card project={project} key={project.id} />;
                })}
            </div>

            <ProjectForm />
        </>
    );
}
