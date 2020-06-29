import React from "react";
import { Link } from 'react-router-dom';

const MenuItem = ({link, name}) => (
    <li>
        <Link to={link}>{name}</Link>
    </li>
)

export default MenuItem;