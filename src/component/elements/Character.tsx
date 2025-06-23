import heroImage from "../../assets/Images/hero-image.png";

export default function Character() {
    return (
        <div className="w-full h-full">
            <img className="w-full h-full aspect-[3/4] object-contain object-center" src={heroImage} alt="hero.jpg" />
        </div>
    );
}
