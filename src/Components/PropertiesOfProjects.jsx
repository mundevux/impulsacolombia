import React from "react";

const PropertiesOfProjects = ({ image, imageAlt , name }) => {
    return (
        <div className="flex flex-col justify-around items-center my-10">
            <img src={image} alt={imageAlt} className=" h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28" />
            <h2 className="text-amber-400 text-base md:text-lg lg:text-xl font-bold mb-2">{name}</h2>
        </div>
    )
}

export default PropertiesOfProjects;