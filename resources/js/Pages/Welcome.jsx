import { Head, Link } from '@inertiajs/react';
import Photo2 from '../assets/img/activities.jpg';
import Banner from '../assets/img/hero-section2.jpg';
import Photo1 from '../assets/img/who-we-are.jpg';
import { useState } from 'react';
const SectionHeader = ({ title, subtitle }) => (
    <div className="flex flex-wrap -mx-4">
        <div className="w-full h-[30vh] px-4 md:w-10/12 lg:w-7/12">
            <p className="mb-2 text-2xl uppercase">{title}</p>
            <h1 className="mb-4 text-7xl font-bold">{subtitle}</h1>
        </div>
    </div>
);

const InfoSection = ({ title, content, image, reverse = false }) => (
    <section className="bg-gray-50 py-20 text-gray-500">
        <div className="container mx-auto px-4 relative">
            <div className="flex flex-wrap items-center -mx-4">
                {/* Image section */}
                <div className={`w-full p-4 ${reverse ? 'lg:order-1' : 'lg:order-2'} lg:w-6/12`}>
                    <img
                        src={image}
                        alt={title}
                        className={`w-full object-cover ${reverse ? 'h-[400px]' : 'h-[650px]'}`}
                    />
                </div>
                {/* Text section */}
                <div className="w-full p-4 lg:order-1 lg:w-6/12">
                    <h3 className="mb-4 text-5xl font-bold text-gray-800">{title}</h3>
                    <p className="mb-6 text-xl text-justify">{content}</p>
                    <a
                        href="#"
                        className="inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default function Welcome({ auth }) {

    const [isOpen, setIsOpen] = useState(false); // State to toggle menu

    const toggleMenu = () => setIsOpen(!isOpen); // Toggle menu visibility
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen selection:bg-[#FF2D20] selection:text-white">
                    {/* Main content */}
                    <div className="relative w-full">
                        <header className="bg-violet-900 text-white py-4 fixed w-full top-0 left-0 z-50 shadow-md">
                            <div className="container mx-auto px-6 flex justify-between items-center">
                                {/* Logo or Title */}
                                <div className="text-3xl font-bold">
                                    <h1>Gubat One Community</h1>
                                </div>

                                {/* Desktop Navigation */}
                                <nav className="hidden md:flex space-x-6">
                                    {auth.user ? (
                                        <>
                                            <Link
                                                href={route('barangay')}
                                                className="hover:text-[#FF2D20] transition-colors text-lg font-semibold"
                                            >
                                                Barangays
                                            </Link>
                                            <Link
                                                href={route('news')}
                                                className="hover:text-[#FF2D20] transition-colors text-lg font-semibold"
                                            >
                                                Community News
                                            </Link>
                                            <Link
                                                href={route('marketplace')}
                                                className="hover:text-[#FF2D20] transition-colors text-lg font-semibold"
                                            >
                                                Barangay Market Place
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href={route('login')}
                                                className="hover:text-[#FF2D20] transition-colors text-lg font-semibold"
                                            >
                                                Log in
                                            </Link>
                                            <Link
                                                href={route('register')}
                                                className="hover:text-[#FF2D20] transition-colors text-lg font-semibold"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </nav>

                                {/* Mobile Menu Button */}
                                <div className="md:hidden flex items-center">
                                    <button
                                        onClick={toggleMenu}
                                        className="text-white focus:outline-none"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-8 h-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Navigation Menu */}
                            {isOpen && (
                                <div className="md:hidden bg-gray-800 text-white py-4">
                                    <div className="container mx-auto px-6">
                                        <nav className="space-y-4">
                                            {auth.user ? (
                                                <>
                                                    <Link
                                                        href={route('barangay')}
                                                        className="block text-lg font-semibold hover:text-[#FF2D20]"
                                                    >
                                                        Barangays
                                                    </Link>
                                                    <Link
                                                        href={route('news')}
                                                        className="block text-lg font-semibold hover:text-[#FF2D20]"
                                                    >
                                                        Community News
                                                    </Link>
                                                    <Link
                                                        href={route('marketplace')}
                                                        className="block text-lg font-semibold hover:text-[#FF2D20]"
                                                    >
                                                        Barangay Market Place
                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <Link
                                                        href={route('login')}
                                                        className="block text-lg font-semibold hover:text-[#FF2D20]"
                                                    >
                                                        Log in
                                                    </Link>
                                                    <Link
                                                        href={route('register')}
                                                        className="block text-lg font-semibold hover:text-[#FF2D20]"
                                                    >
                                                        Register
                                                    </Link>
                                                </>
                                            )}
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </header>



                        {/* Main Sections */}
                        <main className="">
                            {/* Hero Banner Section */}
                            <section className="relative bg-gray-800 text-white">
                                <img
                                    src={Banner}
                                    className="parallax absolute inset-0 h-full w-full object-cover "
                                    alt="Hero Banner"
                                />
                                <div className="container mx-auto px-4 py-48 relative">
                                    <SectionHeader title="GUBAT COMMUNITY" subtitle="UNITED AS ONE" />
                                </div>
                            </section>

                            {/* Info Sections */}
                            <InfoSection
                                title="Who we are?"
                                content="Bicol One Community is an organization operating in the Bicol region of the Philippines, with a mission to combat poverty and uplift less fortunate communities. Their approach revolves around empowerment, sustainability, solidarity, and advocacy. They offer support for sustainable initiatives, foster community solidarity, and advocate for the marginalized. Through these efforts, they aim to break the cycle of poverty and provide lasting change, acting as a beacon of hope for the region by uniting the community in their mission to create a brighter, more equitable future. Bicol One Community is dedicated to eliminating poverty in the Bicol region by empowering communities through educational opportunities, increased internet accessibility, sustainable projects, and advocating for marginalized groups. Our ultimate goal is to instigate lasting transformation, nurturing hope and fostering a more equitable future for the entire region and hopefully across the country."
                                image={Photo1}
                            />
                            <InfoSection
                                title="Helping Hand Activities"
                                content="Our mission is to provide underserved individuals with essential resources and opportunities. This initiative aims to bridge the gap in access by making crucial resources available to those who might otherwise be excluded from various opportunities. By supplying individuals with the necessary tools and support, this program not only offers a means for personal growth and development but also opens doors to greater socio-economic inclusion, enabling them to participate more fully in various aspects of life."
                                image={Photo2}
                                reverse={true}
                            />
                        </main>

                        {/* Footer */}
                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Gubat One Community ©2024
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
