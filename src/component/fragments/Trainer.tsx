import ManImage from "/images/man-image.png";
import WomanImage from "/images/woman-image.png";
import PricingCard from "../elements/PricingCard";

export default function Trainer() {
  const listImage = [
    {
      image: WomanImage,
      name: "Emma Doe",
      national: "New York",
    },
    {
      image: ManImage,
      name: "Jhon Smith",
      national: "USA",
    },
  ];

  const listPrice = [
    {
      color: "blue-500",
      price: 50,
      pakage: "Basic",
      features: ["Cardio", "Fast Burning", "Water", "Weights"],
      button: "Get Started",
    },
    {
      color: "red-500",
      price: 100,
      pakage: "Premium",
      features: ["Cardio", "Fast Burning", "Nutrition", "Water"],
      button: "Get Started",
    },
    {
      color: "green-500",
      price: 150,
      pakage: "Pro",
      features: [
        "Cardio",
        "Fast Burning",
        "Trainer",
        "Nutrition",
        "Water",
        "Weights",
      ],
      button: "Get Started",
    },
  ];
  return (
    <div className="w-full md:h-[30rem] lg:h-[40rem] flex flex-col md:flex-row bg-black text-white p-10 overflow-hidden">
      <div className="md:w-1/2 h-full">
        <h1 className="font-poppins text-2xl font-bold">Trainer</h1>
        <div className="flex">
          {listImage.map((item, index) => (
            <div key={index} className="flex flex-col h-full font-poppins">
              <img
                className="w-full max-h-[30rem] object-contain object-center"
                src={item.image}
                alt={item.name}
              />
              <h1>{item.name}</h1>
              <h1 className="text-slate-600">{item.national}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 h-full mt-10 md:mt-0">
        <h1 className="font-poppins text-2xl font-bold mb-4">Price</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6 h-full">
          {listPrice.map((item, index) => (
            <div className={index > 1 ? "md:hidden lg:block" : ""}>
              <PricingCard
                key={index}
                color={item.color}
                price={item.price}
                pakage={item.pakage}
                features={item.features}
                button={item.button}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
