import { BlogSection } from "../Components/BlogSeccion";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export function Blog(){
    return(
        <div>
            <Header />
            <div className="max-w-7xl mx-auto pt-32 px-4 xl:px-6">
                <p className=' text-lg md:text-xl font-bold text-amber-600'>Nuestras </p>
                <h1 className='text-4xl md:text-5xl font-bold text-shark-900 -mt-2 -ml-0.5 mb-12'>Publicaciones</h1>
                <BlogSection />
            </div>
            <Footer />
        </div>
    )
}