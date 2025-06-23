import Card from "../elements/Card";
import { MdDirectionsRun } from "react-icons/md";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoWaterSharp } from "react-icons/io5";
import { FaPersonCircleCheck } from "react-icons/fa6";
import womanImage from "../../assets/Images/woman-image.png";

export default function Services() {
    const icons = [
        {
            icon: <MdDirectionsRun />,
            label: "Cardio",
            color: "blue-500",
        },
        {
            icon: <MdOutlineSportsGymnastics />,
            label: "Fast Burning",
            color: "red-500",
        },
        {
            icon: <IoWaterSharp />,
            label: "Unlimited Water",
            color: "yellow-500",
        },
        {
            icon: <FaPersonCircleCheck />,
            label: "Trainer",
            color: "green-500",
        },
    ];
    return (
        <div className="bg-[#16161699] py-10 md:py-20 px-10">
            <header>
                <h1 className="font-poppins text-xl md:text-3xl text-white font-semibold">
                    Services
                </h1>
            </header>
            <div className="flex h-[14rem] md:h-[25rem] py-6">
                <div className="md:pr-10 grid grid-cols-3 md:grid-cols-2 gap-4 md:w-1/2">
                    {icons.map((icon, idx) => (
                        <Card
                        className={idx >= 3 ? "hidden md:block" : ""}
                            key={idx}
                            color={icon.color}
                            icon={icon.icon}
                            label={icon.label}
                        />
                    ))}
                </div>
                <div className="bg-gym hidden md:block w-1/2 h-full">
                    <img
                        className="w-full h-full aspect-[3/4] object-contain object-center"
                        src={womanImage}
                        alt="woman.png"
                    />
                    <div className="font-poppins my-4">
                        <h1 className="text-slate-200 text-2xl font-bold">
                            Emma Doe
                        </h1>
                        <div className="flex justify-between text-lg text-slate-500">
                            <h2>Hello there</h2>
                            <h2>New York</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
