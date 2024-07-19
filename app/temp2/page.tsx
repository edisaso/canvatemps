import Image from "next/image"

export const runtime = "edge";

export default function Temp2() {
    return(
<main>

    <div className="bg-white">
        <div className="flex lg:flex-row flex-col items-center justify-between lg:px-[270px] py-5 lg:pt-[100px]">
            <div className="bg-black rounded-2xl p-3 font-bold w-[180px] flex items-center justify-center hover:cursor-pointer">STUDIO AGATHO</div>
            <div><h1 className="text-black font-bold lg:text-2xl pt-5 lg:pt-0">IT’S TIME FOR YOU TO LEAVE A MARK IN HISTORY</h1></div>
        </div>

        <div className="text-black flex flex-col justify-center items-center"><h1 className="lg:text-9xl text-4xl font-bold">ELEVATE YOUR BRAND</h1></div>

        <div className="text-black lg:px-[270px] px-5 pt-4 lg:pt-0"><h2 className="lg:text-3xl font-bold text-sm">STUDIO AGATHO HAS BEEN THE GO-TO COMPANY SINCE THE 80&apos;S.<br/>GET YOUR DESIGN WORK DONE WITH US TOO.</h2></div>

        <div className="flex lg:flex-row flex-col gap-5 justify-center pt-10 pb-10 px-10 lg:px-0">
            <div>
            <Image src="https://ancaaaaaa.my.canva.site/sales-company-website/images/f963b0c05fc4f502517582515e81bc44.jpg" alt="img1" width={640} height={300}/>
            </div>
            <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-2xl text-center p-3 font-bold">REALIZE YOUR VISION</div>
            <div>
                <Image src="https://ancaaaaaa.my.canva.site/sales-company-website/images/756eae64df8b11e7917db1676c2e62f6.jpg" alt="img1" width={640} height={300}/>
            </div>
        </div>
        </div>
    </div>

        <div className="flex flex-col w-full justify-between lg:px-[270px] px-4 pt-10">
            <div><h1 className="lg:text-7xl font-bold text-3xl">IF YOU FIT ANY OF THESE</h1></div>
            <div><h2 className="lg:text-2xl text-sm">Then we can definitely help you with your design needs. Read more to find out about who we are.</h2></div>
                
            <div className="pt-20 lg:pt-0">
                <div className="flex lg:flex-row flex-col gap-3">
                    <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center pt-4">
                        <Image src="https://ancaaaaaa.my.canva.site/sales-company-website/images/d069df9d5cfeef8163d81f1377620c1e.svg" alt="svg1" width={160} height={160}></Image>
                        </div>
                    <div className="flex flex-col gap-3 pt-3 pl-3">
                        <p className="font-bold">Fresh business owner or manager</p>
                        <p>Elaborate further on the identified persona of potential client. Share what your company can do to entice the reader to use your services or products</p>
                    </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                    <div className="flex items-center justify-center pt-4">
                        <Image src="https://ancaaaaaa.my.canva.site/sales-company-website/images/a76ebf8f03acbf1e5f3f3e64b703daa3.svg" alt="svg1" width={160} height={160}></Image>
                        </div>
                    <div className="flex flex-col gap-3 pt-3 pl-3">
                        <p className="font-bold">Busy professional</p>
                        <p>Elaborate further on the identified persona of potential client. Share what your company can do to entice the reader to use your services or products</p>
                    </div>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col gap-3 pt-10">
                <div className="flex flex-row items-center justify-center">
                    <div className="flex items-center justify-center pt-4"><Image src="https://ancaaaaaa.my.canva.site/sales-company-website/images/cc48cda7e50395a81cef857d8a5c2fb3.svg" alt="svg1" width={160} height={160}></Image></div>
                    <div className="flex flex-col gap-3 pt-3 pl-3">
                        <p className="font-bold">Starting creative or artist</p>
                        <p>Elaborate further on the identified persona of potential client. Share what your company can do to entice the reader to use your services or products</p>
                    </div>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                    <div className="flex items-center justify-center pt-4"><Image src="https://ancaaaaaa.my.canva.site/sales-company-website/images/2f379691c0eacee28297b9aa2f2ede2f.svg" alt="svg1" width={160} height={160}></Image></div>
                    <div className="flex flex-col gap-3 pt-3 pl-3">
                        <p className="font-bold">Established business needing a revamp</p>
                        <p>Elaborate further on the identified persona of potential client. Share what your company can do to entice the reader to use your services or products</p>
                    </div>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col pt-10 pb-10">
                    <div className="lg:pt-[400px] flex justify-center flex-col px-14 gap-5 py-10 lg:px-0 lg:gap-0 lg:py-0">
                        <div>
                        <h1 className="text-5xl font-bold">ABOUT US</h1>
                        </div>
                        <div>
                        <p className="text-left pr-10">Our offerings range from graphic design and branding strategy to website development and video production. Agatho boasts a global client base and various industry awards. It has set the standard for design studios as its clients collaborate with the highest caliber of creatives, engineers, and ambassadors.
                        </p>
                        </div>
                    </div>
                    <div className="relative lg:h-1000 lg:w-100 h-1/2 w-full px-20">
                        <div className="absolute inset-y-0 right-5 lg:right-24 w-500 font-bold text-9xl rotate-90">ABOUT</div>
                        <Image src="https://ancaaaaaa.my.canva.site/sales-company-website/images/0044fa51a582aaa1c2b87e3766af94f7.jpg" alt="About-us" width={1000} height={100} />
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-white lg:pb-10">
            <div className="flex lg:flex-row flex-col items-center justify-center gap-5 lg:px-[300px] lg:py-10 py-10">
                <div>
                <video src="https://ancaaaaaa.my.canva.site/sales-company-website/videos/8335b664d6802a6891a8c8f975dacde2.mp4" autoPlay loop muted/>
                </div>
                <div>
                <video src="https://ancaaaaaa.my.canva.site/sales-company-website/videos/8335b664d6802a6891a8c8f975dacde2.mp4" autoPlay loop muted/>
                </div>
                <div>
                <video src="https://ancaaaaaa.my.canva.site/sales-company-website/videos/bb9209c74605970a3fb418627f4af628.mp4" autoPlay loop muted/>
                </div>
                <div>
                <video src="https://ancaaaaaa.my.canva.site/sales-company-website/videos/605f4ed4cdf20e2053cbf79268a127b8.mp4" autoPlay loop muted/>
                </div>
            </div>

            <div className="lg:px-[200px]">
                <h1 className="text-black font-bold lg:text-6xl text-center pb-10 lg:pb-0">OUR HIGH-CALIBER CREATIVES AND AMBASSADORS CAN CREATE THE BEST MATERIALS FOR ALL BRANDS.</h1>
                </div>
        </div>

        <div className="flex flex-col items-center justify-center py-10">
            <div>
                <h1 className="font-bold text-white lg:text-7xl text-3xl text-center">WE DO THE HARD WORK</h1>
            </div>

            <div className="flex lg:flex-row flex-col lg:px-[200px] px-24 gap-5 pt-[100px] pb-[50px]">
                <div className="flex flex-col gap-5">
                    <div>
                        <Image src="https://ancaaaaaa.my.canva.site/sales-company-website/videos/6053f3729925d013cec6f2d08778165e.gif" alt="flower" height={112} width={112} />
                    </div>
                    <div className="gap-5 flex flex-col">
                    <p className="font-bold">RIVETING DESIGN</p>
                    <p>Write a paragraph that talks about your company here. You can talk about your company&apos;s background, history, mission, vision, or philosophy.</p>
                    <p>Anything that will introduce your brand&apos;s persona to your clients.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <Image src="https://ancaaaaaa.my.canva.site/sales-company-website/videos/6053f3729925d013cec6f2d08778165e.gif" alt="flower" height={112} width={112} />
                    <p className="font-bold">AGILE, VERSATILE, ENGAGED</p>
                    <p>Write a paragraph that talks about your company here. You can talk about your company&apos;s background, history, mission, vision, or philosophy. Anything that will introduce your brand's persona to your clients.</p>
                    <p>This will help build a connection between you and them, that hopefully leads into a working relationship.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <Image src="https://ancaaaaaa.my.canva.site/sales-company-website/videos/6053f3729925d013cec6f2d08778165e.gif" alt="flower" height={112} width={112} />
                    <p className="font-bold">INCLUSIVE AND DIVERSE VISUALS</p>
                    <p>Write a paragraph that talks about your company here. You can talk about your company&apos;s background, history, mission, vision, or philosophy.</p>
                    <p>Anything that will introduce your brand&apos;s persona to your clients.</p>
                </div>
            </div>

            <div className="bg-white">
                <div className="flex lg:flex-row flex-col items-center justify-center px-[100px] gap-5">
                    <div><video src="https://ancaaaaaa.my.canva.site/sales-company-website/videos/50a1a4f7eb3f72f09719ed4219807c75.mp4" autoPlay loop muted className="filter grayscale"/></div>
                    <div className="text-black">
                        <p className="text-2xl">Our reason for being</p>
                        <p className="fond-bold text-6xl text-left">WE ELEVATE BRANDS,<br/>REALIZING THE FUTURE OF CREATIVITY</p>
                    </div>
                    <div className="lg:pr-[100px] w-12 lg:w-full py-5 lg:py-0">
                        <Image src="https://ancaaaaaa.my.canva.site/sales-company-website/videos/6d326cb842bfda5e26e6a68c53e0c6e3.gif" alt="diamond" height={112} width={112}/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-10 pt-[100px]">
            <div>
                <h1 className="font-bold text-white lg:text-7xl text-3xl text-center">CLIENTS WE’VE ALREADY<br/>HELPED LEAVE A MARK</h1>
            </div>

            <div className="flex flex-row lg:flex-col gap-10 lg:gap-0">
            <div className="flex lg:flex-row flex-col text-white lg:text-4xl font-bold lg:gap-[150px] gap-10 pt-[100px]">
                <div><p>Phases & Spaces Inc.</p></div>
                <div><p>schematiq</p></div>
                <div><p>MEMENTO</p></div>
                <div><p>Sprig & Sky</p></div>
            </div>
            <div className="flex lg:flex-row flex-col text-white lg:text-4xl font-bold lg:gap-[150px] gap-10 pt-[100px]">
                <div><p>ChapterCo&<br/>Books</p></div>
                <div><p>CuraAid+</p></div>
                <div><p>Crowd zero</p></div>
                <div><p>Wilderness<br/>Watchers<br/>Foundation</p></div>
            </div>
            </div>

            <div className="pt-[150px] lg:pr-[600px]">
            <h1 className="font-bold text-white lg:text-7xl text-3xl text-center">WHAT WE OFFER</h1>
            <p className="font-bold text-white px-5 lg:px-0">Interested in becoming one of our clients? These are all that we have in store.</p>
            </div>

            <div className="flex lg:flex-row flex-col lg:gap-[150px] gap-10 pt-10 lg:pr-[400px]">
                <div className="flex flex-row gap-5 items-center pl-4 lg:pl-0">
                    <div><Image src="https://ancaaaaaa.my.canva.site/sales-company-website/images/ab4b0c8b15d36bf269f7c9860fe6c57d.svg" alt="diamond" height={128} width={128} /></div>
                    <div><p className="text-white font-bold">Brand strategy<br/>Digital marketing<br/>Content development<br/>Graphic design</p></div>
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <div><Image src="https://ancaaaaaa.my.canva.site/sales-company-website/images/ab4b0c8b15d36bf269f7c9860fe6c57d.svg" alt="diamond" height={128} width={128} /></div>
                    <div><p className="text-white font-bold">Web design<br/>Photography<br/>Video production</p></div>
                </div>
            </div>
            </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-center justify-center lg:gap-[100px] gap-10 bg-gradient-to-r from-pink-500 to-sky-500 py-10 px-10">
                <div>
                    <p>Get in touch with Studio Agatho</p>
                    <p>Website: www.reallygreatsite.com</p>
                </div>
                <div>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: hello@reallygreatsite.com</p>
                </div>
                <div>                    
                    <p>Office Address:</p>
                    <p>123 Anywhere St., Any City 12345</p>
                </div>
            </div>
</main>
    )
};