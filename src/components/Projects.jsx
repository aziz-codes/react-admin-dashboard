import { useEffect, useState } from "react";
const { faker } = require('@faker-js/faker');
const Projects = () => {


const [images, setImages] = useState([]);

useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
     
      avatar: faker.image.avatar(),
 
    }));
    setImages(suggestions);
  }, []);

console.log(images);
  return (
    <div>projects</div>
  )
}

export default Projects