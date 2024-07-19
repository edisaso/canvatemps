import Image from "next/image"

export const runtime = "edge";

export default function Temp3() {
    return (
        <main className="bg-pink-500 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-yellow-300 text-6xl font-bold mb-8">PLEW<br/>GAMES<br/>CO.</h1>
                
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Large Team Updates card */}
                    <div className="bg-white rounded-3xl p-6 w-full lg:w-1/4 flex flex-col justify-between">
                        <div className="flex justify-end">
                            <div className="h-10 w-10 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">+</div>
                        </div>
                        <div className="flex justify-center my-8">
                            <Image src="https://ancaaaaaa.my.canva.site/internal-homepage-internal-communication-website-in-neon-pink-white-yellow-3d-illustration-style/images/c983fa5c9f52c48214cdac270ef2c123.png" alt="Team Updates" width={150} height={150} />
                        </div>
                        <div className="text-center">
                            <p className="text-purple-600 font-bold text-3xl">Team<br/>Updates</p>
                            <div className="mt-4 h-10 w-10 border-2 border-purple-600 rounded-full flex items-center justify-center mx-auto">
                                <p className="text-purple-600 text-2xl font-bold">→</p>
                            </div>
                        </div>
                    </div>

                    {/* Grid of smaller cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
                        {[
                            { title: "Employee Handbook", icon: "https://ancaaaaaa.my.canva.site/internal-homepage-internal-communication-website-in-neon-pink-white-yellow-3d-illustration-style/images/e5dc0f68673e33a7418fc0e8029c1bb4.png", color: "blue-500" },
                            { title: "Project Reports", icon: "https://ancaaaaaa.my.canva.site/internal-homepage-internal-communication-website-in-neon-pink-white-yellow-3d-illustration-style/images/fd80bdec5613c167cbf43576ed0b6620.png", color: "purple-600" },
                            { title: "Hiring", icon: "https://ancaaaaaa.my.canva.site/internal-homepage-internal-communication-website-in-neon-pink-white-yellow-3d-illustration-style/images/9a9068c6d580744aee1f93b6e0748738.png", color: "blue-500" },
                            { title: "Annual Report", icon: "https://ancaaaaaa.my.canva.site/internal-homepage-internal-communication-website-in-neon-pink-white-yellow-3d-illustration-style/images/21ec4723a181f1528c0475f299ba053f.png", color: "purple-600" },
                            { title: "New Releases", icon: "https://ancaaaaaa.my.canva.site/internal-homepage-internal-communication-website-in-neon-pink-white-yellow-3d-illustration-style/images/adc6bab28193c55388cd00d6f40f1180.png", color: "blue-500" },
                            { title: "Company Culture", icon: "https://ancaaaaaa.my.canva.site/internal-homepage-internal-communication-website-in-neon-pink-white-yellow-3d-illustration-style/images/e20360e0893a7149732313f33a4a0079.png", color: "purple-600" },
                        ].map((card, index) => (
                            <div key={index} className="bg-white rounded-3xl p-4 flex flex-col justify-between h-64">
                                <div className="flex justify-end">
                                    <div className="h-8 w-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">+</div>
                                </div>
                                <div className="flex justify-center my-4 ">
                                    <Image src={card.icon} alt={card.title} width={80} height={80} />
                                </div>
                                <p className={`text-${card.color} text-2xl font-bold text-center`}>{card.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}