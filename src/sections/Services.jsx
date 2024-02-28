import Card from "../components/Card";

import Insulfilm from "../assets/1.png";
import repair from "../assets/2.png";
import Tire from "../assets/3.png";
import tuning from "../assets/4.png";
import painting from "../assets/5.png";
import wash from "../assets/6.png";

function Services() {
  const CardData = [
    {
      title: "Automotive insulation film",
      price: 100,
      secondary: true,
      img: Insulfilm,
    },
    {
      title: "Motor repair",
      price: 200,
      secondary: true,
      img: repair,
    },
    {
      title: "Tire services",
      price: 700,
      secondary: true,
      img: Tire,
    },
    {
      title: "Exhaust system tuning",
      price: 5000,
      secondary: true,
      img: tuning,
    },
    {
      title: "Bodywork and painting services",
      price: 1000,
      secondary: true,
      img: painting,
    },
    {
      title: "Car wash",
      price: 50,
      secondary: true,
      img: wash,
    },
  ];

  return (
    <section className="py-10 px-10 gap-4 md:grid md:grid-cols-3 flex flex-col">
      {CardData.map((card) => (
        <Card
          secondary={card.secondary}
          title={card.title}
          price={card.price}
          img={card.img}
        />
      ))}
    </section>
  );
}

export default Services;
