import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
            <h3 className="text-2xl font-bold -mt-8 text-chart-4">Atom Tracker</h3>
        </div>
    );
}