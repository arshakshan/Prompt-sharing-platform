"use client"

import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"


const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map(
                (post) => {
                    return (
                        <PromptCard
                            key={post.id}
                            post={post}
                            handleTagClick={handleTagClick}
                        />
                    )
                }
            )}
        </div>
    )
}

const Feed = () => {

    const [searchText, setSearchText] = useState("")
    const [posts, setposts] = useState([])

    const handleSearchChange = (e) => {

    }

    useEffect(() => {
        // fetch data
        const fetchPosts = async () => {
            try {
                const response = await fetch("/api/prompt");
                const data = await response.json();
                console.log("Fetched posts:", data); // Log fetched data for debugging
                setposts(data);
            } catch (error) {
                console.error("Error fetching posts:", error); // Log errors
            }
        };

        fetchPosts();
    }, [])

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    className="search_input peer"
                />
            </form>

            <PromptCardList
                data={posts}
                handleTagClick={() => { }}
            />

        </section>
    )
}

export default Feed