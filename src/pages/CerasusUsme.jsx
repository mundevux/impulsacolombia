import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export function CerasusUsme(){
    return(
        <div>
            <Header />
            <div className="max-w-7xl mx-auto pt-32 px-6 xl:px-6">
                <p className=' text-lg md:text-xl font-bold text-amber-600'>Cerasus </p>
                <h1 className='text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12'>Usme</h1>
            </div>
            <Footer />
        </div>
    )
}