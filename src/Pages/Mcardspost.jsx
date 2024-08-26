import React from 'react'
import { useParams } from 'react-router-dom'

function Mcardspost() {

    const cardData=[{id:1, title:"Doctor1"},
                    {id:2,title:"Doctor2"},
                    {id:3,title:"Doctor3"}]

    const {id}=useParams()               
    const cardPost = cardData.find(blog=> blog.id === parseInt(id))



    if(!cardPost)  return <h2>this page is not found</h2>

  return (
    <div>
        <NavigationBar/>
        <h1>card Post {id}</h1>
        <h1>{cardPost.title}</h1>
        <p>{cardPost.content}</p>
    </div>
  )
}



export default Mcardspost
