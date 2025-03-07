import "./style.css";

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => (
    <main className="container">
        <div className="content">{children}</div>
    </main>
);

export default Container;
