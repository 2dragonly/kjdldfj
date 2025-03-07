import { Link } from "react-router";

export const Home = () => {
    return (
        <main>
            REACT ROUTER v7
            <Link to="/blog">Blogs</Link>
            <Link to="/about">About</Link>
        </main>
    );
};

export default Home;