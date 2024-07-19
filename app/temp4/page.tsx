import Image from 'next/image'

export const runtime = "edge";

const categories = [
  { name: 'Printers', icon: 'https://ancaaaaaa.my.canva.site/dark-blue-simple-dark-tech-and-gaming-bio-link-website/images/2305fc6e63e80ad4f692c9e85d8a1e83.svg' },
  { name: 'Monitors', icon: 'https://ancaaaaaa.my.canva.site/dark-blue-simple-dark-tech-and-gaming-bio-link-website/images/82c72e8643060dab3aaea1efd07ee82c.svg' },
  { name: 'Headsets', icon: 'https://ancaaaaaa.my.canva.site/dark-blue-simple-dark-tech-and-gaming-bio-link-website/images/2851371c468302a3e1e667de611afc51.svg' },
  { name: 'Storage', icon: 'https://ancaaaaaa.my.canva.site/dark-blue-simple-dark-tech-and-gaming-bio-link-website/images/9ed520ebae69a65c8df2e7f2884909ea.svg' },
  { name: 'Processors', icon: 'https://ancaaaaaa.my.canva.site/dark-blue-simple-dark-tech-and-gaming-bio-link-website/images/66c6f2315cb5e0530e3e9b520335f820.svg' },
  { name: 'Mouse', icon: 'https://ancaaaaaa.my.canva.site/dark-blue-simple-dark-tech-and-gaming-bio-link-website/images/7b7b28ffee302d30c35bc0ab6946d60d.svg' },
]

const socialIcons = [
  { name: 'Instagram', icon: 'https://ancaaaaaa.my.canva.site/dark-blue-simple-dark-tech-and-gaming-bio-link-website/images/82ca36770005b7351e28866a8e56be82.svg', link: '#' },
  { name: 'Facebook', icon: 'https://ancaaaaaa.my.canva.site/dark-blue-simple-dark-tech-and-gaming-bio-link-website/images/19951775e37ee348133b7cd5fda8923d.svg', link: '#' },
  { name: 'Twitter', icon: 'https://ancaaaaaa.my.canva.site/dark-blue-simple-dark-tech-and-gaming-bio-link-website/images/7d58a9bf5a1dde59658410cc1f74e95e.svg', link: '#' },
]

export default function Temp4() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://ancaaaaaa.my.canva.site/dark-blue-simple-dark-tech-and-gaming-bio-link-website/images/2605a5f8dd1865a0e0585245aa19e0a8.png')] text-white">

      <main className="container mx-auto px-4 py-16 ">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Portal Tech Co.
        </h1>

        <h2 className="text-xl text-center mb-8">CHOOSE A CATEGORY</h2>

 {/* Container with blurred background */}
 <div className="relative max-w-3xl mx-auto overflow-hidden">
          {/* Pseudo-element for blur effect */}
          <div className="absolute inset-0 backdrop-blur-md blur-2xl bg-white/20"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
              {categories.map((category) => (
                <div key={category.name} className="flex flex-col items-center hover:bg-neutral-600 p-5 hover:cursor-pointer">
                  <div className="p-6 rounded-lg mb-2">
                    <Image src={category.icon} alt={category.name} width={40} height={40} />
                  </div>
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 space-x-6 mt-16">
          {socialIcons.map((social) => (
            <a key={social.name} href={social.link} className="text-gray-400 hover:text-white flex items-center justify-center flex-col gap-3">
              <Image src={social.icon} alt={social.name} width={24} height={24} />
              <a>{social.name}</a>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}