import { Sun, Star, Eye, Globe } from "lucide-react";
const ListComponent = () => {
  const features = [
    {
      icon: <Sun size={20} />,
      text: <>Lorem ipsu<br />dolor amet</>,
    },
    {
      icon: <Star size={20} />,
      text:  <>Lorem ipsu<br />dolor amet</>,
    },
    {
      icon: <Eye size={20} />,
      text:  <>Lorem ipsu<br />dolor amet</>,
    },
    {
      icon: <Globe size={20} />,
      text:  <>Lorem ipsu<br />dolor amet</>,
    },
  ]

  return (
    <div className="feature-list">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="feature-icon">{feature.icon}</div>
          <div className="feature-text">{feature.text}</div>
        </div>
      ))}
    </div>
  )
}

export default ListComponent;

