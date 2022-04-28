import { Routes, Route } from "react-router-dom";
import Post from "./components/post/post";
import Create from "./components/create";
import Footer from "./components/footer";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Posts from "./components/post/posts";

function App() {
  return (
    <section>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts/:id" element={<Post />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
