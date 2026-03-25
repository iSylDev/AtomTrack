import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex items-center gap-2 text-primary font-semibold">
            <img src={'/images/logo.png'} alt="Logo" className=" w-7" />
            <h3 className="text-xl">AtomTrack</h3>
        </div>
    );
}