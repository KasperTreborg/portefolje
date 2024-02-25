import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav class="border-gray-200 bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://placekitten.com/g/200/200" class="h-12" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Kasper Treborg</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto">
                <ul class="font-bold text-xl flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-900">
                    <li>
                        <Link to="/" className="block py-2 px-3 text-white hover:text-blue-500 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/test" className="block py-2 px-3 text-white hover:text-blue-500 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">
                            Test
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 px-3 text-white hover:text-blue-500 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 px-3 text-white hover:text-blue-500 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 px-3 text-white hover:text-blue-500 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">
                            Contact
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}