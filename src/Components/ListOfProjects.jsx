import React from 'react';
import { Link } from 'react-router-dom';

const ListOfProjects = ( { name, link } ) => {
    return (
        <div>
            <Link to={link} className="block md:px-4 transition text-base text-white hover:text-amber-500">{name}</Link>
        </div>
    );
}

export default ListOfProjects;