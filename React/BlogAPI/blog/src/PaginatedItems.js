import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import axios from "axios";
import Posts from "./Posts";

export default function PaginatedItems({ itemsPerPage }) {
    const [posts, setPosts] = useState([]);

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        async function getPosts() {
            let url = "http://127.0.0.1:8000/posts";
            try {
                const response = await axios.get(url);
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getPosts();

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(posts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(posts.length / itemsPerPage) - 1);
    }, [itemOffset, itemsPerPage, posts]);

    const handlePageClick = (event, page) => {
        const newOffset = (page * itemsPerPage) % posts.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Posts currentItems={currentItems} />
            <Pagination
                count={pageCount}
                variant="outlined"
                shape="rounded"
                onChange={handlePageClick}
            />
        </>
    );
}
