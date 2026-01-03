import { FaJava, FaPython, FaJs } from "react-icons/fa";
import "../styles/ComponentMyStack.css"

const stackData = [
    {
        id: 1,
        name: "Java",
        icon: <FaJava size={50} />,
        color: "#e76f00",
        desc: "I write Minecraft plugins on Paper api and Bukkit."
    },
    {
        id: 2,
        name: "Python",
        icon: <FaPython size={50} />,
        color: "#306998",
        desc: "FastAPI, bots and all kinds of automation."
    },
    {
        id: 3,
        name: "JavaScript",
        icon: <FaJs size={50} />,
        color: "#f7df1e",
        desc: "My mother's friend's son. Just for fun."
    }
];

function ComponentMyStack() {
    return (
        <div className="stack-container">
            <h2>My Stack</h2>
            <div className="stack-row">
                {stackData.map((tech) => (
                    <div
                        key={tech.id}
                        className="stack-card"
                        style={{ borderColor: tech.color }}
                    >
                        <div className="icon" style={{ color: tech.color }}>
                            {tech.icon}
                        </div>

                        <h3>{tech.name}</h3>

                        <p className="description">{tech.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ComponentMyStack;