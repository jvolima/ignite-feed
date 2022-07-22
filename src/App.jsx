import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="João Vitor" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam soluta similique porro cupiditate vitae consequatur laboriosam consectetur facere repellendus numquam, voluptate corrupti nesciunt doloremque error deserunt ducimus itaque, repudiandae culpa." 
          />
          <Post 
            author="Giovani Ocan" 
            content="Um novo post muito legal." 
          />
        </main>
      </div>
    </div>
  )
}



