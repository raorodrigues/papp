import React from 'react';
import MenuItem from '../MenuItem';

const Menu = ({ items }) => (
    <nav>
        <ul>
            {items.map(item => <MenuItem link={item.link} name={item.name} key={item.name} />)}
        </ul>
    </nav>
)

export default Menu;