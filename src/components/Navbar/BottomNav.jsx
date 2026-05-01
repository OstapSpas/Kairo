import PlantIcon from "../../assets/icons/plant-icon.svg";
import HomeIcon from "../../assets/icons/home-icon.svg";
import RoadIcon from "../../assets/icons/road-icon.svg";
import AiIcon from "../../assets/icons/ai-icon.svg";

const icons = [
  {
    id: 1,
    icon: PlantIcon,
    alt: "Focus",
    path: "#",
  },
  {
    id: 2,
    icon: HomeIcon,
    alt: "Home",
    path: "#",
  },
  {
    id: 3,
    icon: RoadIcon,
    alt: "Tracker",
    path: "#",
  },
  {
    id: 4,
    icon: AiIcon,
    alt: "AI",
    path: "#",
  },
];


export default function BottomNav() {
    return (
        <section className="bottom-nav">
            <ul className="bottom-list">
                {icons.map((item) => (
                    <li className="bottom-item" key={item.id}>
                        <a href={item.path} className="bottom-link">
                            <img src={item.icon} alt={item.alt} />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}