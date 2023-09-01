import { Divider } from "antd";
import { Link } from "react-router-dom";

//  icons
import {
  FaHome,
  FaProjectDiagram,
  FaLayerGroup,
  FaSignOutAlt,
} from "react-icons/fa";

function SidebarItems() {
  const items = [
    {
      icon: <FaHome />,
      text: "",
      href: "/home",
    },
    {
      icon: <FaProjectDiagram />,
      text: "",
      href: "/projects",
    },
    {
      icon: <FaLayerGroup />,
      text: "",
      href: "/overview",
    },
  ];

  const additionalItems = [
    {
      icon: <FaSignOutAlt />,
      text: "",
      href: "/home",
    },
  ];

  return (
    <div>
      <div>
        {items.map((item, index) => (
          <Link to={item.href} key={index}>
            <div>{item.icon}</div>
          </Link>
        ))}
      </div>

      <Divider />

      <div>
        {additionalItems.map((item, index) => (
          <Link to={item.href} key={index}>
            <div>{item.icon}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SidebarItems;
