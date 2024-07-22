"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () => {

    // renaming data to seessions
    const { data: session } = useSession()
    const [posts, setPosts] = useState([])
    const router = useRouter()

    useEffect(() => {
        // fetch data

        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await response.json()
            console.log("Fetched posts:", data) // Log the fetched data
            setPosts(data)
        }

        console.log("Posts: ", posts)

        if (session?.user.id)
            fetchPosts()
    }, [])

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?")

        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE'
                })

                const filteredPosts = posts.filter((p) => p._id !== post._id)
                setPosts(filteredPosts)
            } catch (error) {
                console.log("Error Deleting Post", error)
            }
        }
    }

    return (
        <Profile
            name={session?.user.name}
            desc="Welcome to your Personalized Profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile