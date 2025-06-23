type Props = {
  color: string;
  price: number;
  pakage: string;
  features: string[];
  button: string;
};

const colorClassMap: Record<string, string> = {
  "blue-500": "text-blue-500 border-blue-500 shadow-blue-500",
  "red-500": "text-red-500 border-red-500 shadow-red-500",
  "green-500": "text-green-500 border-green-500 shadow-green-500",
  "yellow-500": "text-yellow-500 border-yellow-500 shadow-yellow-500",
};

export default function PricingCard({
  price,
  pakage,
  features,
  button,
  color,
}: Props) {
  const colorClasses = colorClassMap[color] || "";
  return (
    <div
      className={`flex flex-col justify-between shadow-md border-2 rounded-xl font-poppins md:h-[20rem] lg:h-[25rem] p-6 ${colorClasses}`}
    >
      <h1 className="text-white font-extrabold text-center  md:text-lg lg:text-2xl">
        {pakage}
      </h1>
      <h1 className="md:text-4xl lg:text-5xl text-center font-bold">
        ${price}
      </h1>
      <ul className="text-white list-decimal">
        {features.map((item, index) => (
          <li key={index} className="text-sm md:text-md">
            {item}
          </li>
        ))}
      </ul>
      <button className="mt-4 font-semibold">{button}</button>
    </div>
  );
}
