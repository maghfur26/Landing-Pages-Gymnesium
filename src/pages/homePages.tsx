import Character from "../component/elements/Character";
import Services from "../component/fragments/Services";
import Testimonial from "../component/fragments/Testimonial";
import Trainer from "../component/fragments/Trainer";

export default function HomePages() {
    return (
        <div className="w-full bg-black">
            <div className="flex relative py-5 h-[25rem] lg:min-h-screen" id="home">
                <div className="order-2 w-full md:w-1/2  overflow-hidden relative">
                    <div className="w-full h-full">
                        <div className="relative w-full h-full z-10">
                            <Character />
                        </div>
                    </div>
                </div>
                <div className="absolute md:relative top-20 md:top-0 z-20 order-1 md:w-1/2 font-poppins text-white md:flex flex-col justify-center uppercase gap-4 pl-10">
                    <h1 className="text-5xl lg:text-7xl font-extrabold">
                        build your body stronger
                    </h1>
                    <button className="text-xl lg:text-3xl mt-6 md:mt-2 bg-red-500 py-2 px-4 rounded-full uppercase w-[60%] md:w-52 lg:w-72 font-bold hover:bg-red-600 cursor-pointer">
                        Get Started
                    </button>
                </div>
            </div>
            <div className="w-full">
                <Services />
            </div>
            <div className="w-full">
                <Trainer />
            </div>
            <div className="w-full">
                <Testimonial />
            </div>
        </div>
    );
}
