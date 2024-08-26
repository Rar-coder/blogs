import React, {useState} from 'react'
import NavigationBar from '../Components/NavigationBar'
import HeroSection from '../Components/HeroSection'
import image1 from "../assets/image1.jpeg"
import BlogCard from '../Components/BlogCard'
function Homepage() {

  

  const [blogs] = useState([
      {id: 1 , imageUrl: image1, title:"this is 1st blog" , paragraph:"this is paragraph of first blog"},
       {id: 2 , imageUrl: image1, title:"this is 2nd blog" , paragraph:"this is paragraph of first blog"},
       {id: 3 , imageUrl: image1, title:"this is 3rd blog" , paragraph:"this is paragraph of first blog"}
  ])




return (
  <div>
    <NavigationBar />
    <HeroSection />
      {blogs.map(blog =>(
          <BlogCard
              imageUrl={blog.imageUrl}
              title={blog.title}
              paragraph={blog.paragraph}
              id={blog.id}
              key={blog.id}
          
          
          
          
          
          />

      ))}
    
  </div>
)
}

export default Homepage