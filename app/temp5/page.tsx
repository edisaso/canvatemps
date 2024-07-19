import Image from "next/image";

export const runtime = "edge";

export default function Temp5() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="flex-1 bg-yellow-500 p-8 flex flex-col items-center justify-center text-center">
                <div className="mb-4 rounded-lg">
                    <Image src={"/favicon.ico"} alt="Person sitting on a chair" width={300} height={400} objectFit="cover" />
                </div>
                <h1 className="text-4xl font-bold text-white">Madison Lee</h1>
                <p className="text-white mt-2">SHE-EO • ENTREPRENEUR</p>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
                <div className="bg-teal-500 p-6 flex items-center justify-center text-white font-semibold text-4xl text-center">Download My Book</div>
                <div className="bg-pink-500 p-6 flex items-center justify-center text-white text-4xl text-center font-semibold">10 Online Side Hustles</div>
                <div className="bg-purple-500 p-6 flex items-center justify-center text-white text-4xl text-center font-semibold">15 Money Saving Ideas</div>
                <div className="bg-orange-500 p-6 flex items-center justify-center text-white text-4xl text-center font-semibold">How To Be A Good Mentor</div>
                <div className="bg-indigo-500 p-6 flex items-center justify-center text-white text-4xl text-center font-semibold">Future Proofing Your Career</div>
                <div className="bg-yellow-600 p-6 flex items-center justify-center text-white text-4xl text-center font-semibold">40 Simple Self Care Tips</div>
            </div>
        </div>
    );
}