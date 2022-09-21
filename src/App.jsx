import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post
            author="Rodrigo"
            content="Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur dolorem provident eveniet, vel, voluptas fuga minima. eveniet, vel, voluptas fuga minima."
          />

          <Post
            author="Alex"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a facilis omnis quidem iste assumenda animi quaerat laboriosam accusamus consectetur aspernatur distinctio alias dolorem provident eveniet, vel, voluptas fuga minima."
          />
        </main>
      </div>
    </div>
  );
}