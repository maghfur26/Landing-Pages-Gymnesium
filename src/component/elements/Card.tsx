type Props = {
    color: string;
    icon: React.ReactNode;
    label: string;
    className?: string;
};

const colorClassMap: Record<string, string> = {
    "blue-500": "text-blue-500 border-blue-500 shadow-blue-500",
    "red-500": "text-red-500 border-red-500 shadow-red-500",
    "green-500": "text-green-500 border-green-500 shadow-green-500",
    "yellow-500": "text-yellow-500 border-yellow-500 shadow-yellow-500",
};

export default function Card({ color, icon, label, className }: Props) {
    const colorClasses = colorClassMap[color] || "";

    return (
        <div
            className={`border-2 w-22 md:w-32 rounded-lg p-4 grid place-content-center place-items-center gap-4 shadow-md ${colorClasses} ${className}`}
        >
            <div className="text-4xl md:text-6xl">{icon}</div>
            <h1 className="text-white">{label}</h1>
        </div>
    );
}