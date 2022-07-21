import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post 
        author="João Vitor" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam soluta similique porro cupiditate vitae consequatur laboriosam consectetur facere repellendus numquam, voluptate corrupti nesciunt doloremque error deserunt ducimus itaque, repudiandae culpa." 
      />
      <Post 
        author="Giovani Ocan" 
        content="Um novo post muito legal." 
      />
    </div>
  )
}



