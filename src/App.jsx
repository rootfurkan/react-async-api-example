import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const BASE_URL = "http://localhost:3005"

  const [user, setUser] = useState(null)
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    return response.data
  }

  const getPostById = async (postId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return response.data
  }

  const getPost = async () => {
    try {
      setLoading(true)

      const userData = await getUserById(1)
      setUser(userData)

      const postId = userData.id

      const postData = await getPostById(postId)
      setPost(postData)

    } catch (err) {
      setError("Veri alınırken hata oluştu")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  if (loading) {
    return <div>Yükleniyor...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <h2>User</h2>
      {user && (
        <div>
          <p><b>ID:</b> {user.id}</p>
          <p><b>Name:</b> {user.username}</p>
        </div>
      )}

      <h2>Post</h2>
      {post && (
        <div>
          <p><b>Title:</b> {post.title}</p>
          <p><b>Body:</b> {post.body}</p>
        </div>
      )}
    </div>
  )
}

export default App
