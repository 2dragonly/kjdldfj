import { Link } from "react-router";

export const Home = () => {
    return (
        <main>
            REACT ROUTER v7
            <Link to="/posts">posts</Link>
            <Link to="/lorem">lorem</Link>
        </main>
    );
};

export default Home;