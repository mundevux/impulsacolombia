import Logo from '/public/img/Logo_Impulsa_Colombia.png';

export function AppHeader() {
    return (
        <header>
            <nav className="z-10 w-full fixed backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
                        <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer"></input>
                        <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                            <a href="#home" aria-label="logo" className="flex space-x-2 items-center">
                                <div aria-hidden="true" className="flex space-x-1">
                                    <img src={Logo} alt="logo" className="h-8 w-8 md:h-10 md:w-10 rounded-full"></img>
                                </div>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">Código Creativo</span>
                            </a>

                            <div className="relative flex items-center lg:hidden max-h-10">
                                <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
                                    <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                    <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                </label>
                            </div>
                        </div>
                        <div aria-hidden="true" className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"></div>
                        <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                                lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                                peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                                dark:shadow-none dark:bg-gray-800 dark:border-gray-700">

                            <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                                    <li>
                                        <a href="#aboutus" className="block md:px-4 transition text-base text-[#00223B] hover:text-primary dark:text-white ">
                                            <span>Nosotros</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#solutions" className="block md:px-4 transition text-base text-[#00223B] hover:text-primary dark:text-white">
                                            <span>Soluciones</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact" className="block md:px-4 transition text-base text-[#00223B] hover:text-primary dark:text-white">
                                            <span>Contacto</span>
                                        </a>
                                    </li>
                                    {/*<li>
                                        <a href="#blog" className="block md:px-4 transition text-base text-[#00223B] hover:text-primary dark:text-white">
                                            <span>Blog</span>
                                        </a>
                                    </li>*/}
                                </ul>
                            </div>

                            <div className='flex justify-center'>
                                <div className="mt-12 lg:mt-0">
                                    <a href="https://www.facebook.com/codcreativo" className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full text-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" target='_blank'>
                                        <span className="relative text-xl font-semibold dark:text-white text-primary"><i className="fa-brands fa-facebook"></i></span>
                                    </a>
                                </div>

                                <div className="mt-12 lg:mt-0">
                                    <a href="https://www.instagram.com/codcreativo/" className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full text-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" target='_blank'>
                                        <span className="relative text-xl font-semibold dark:text-white text-primary"><i className="fa-brands fa-instagram"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}