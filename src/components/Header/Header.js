import React from 'react';
import LinkWrapper from '../LinkWrapper/LinkWrapper';

const Header = () => {
    return (
        <nav>
            <LinkWrapper activeStyle={{}} to="/" >Conferences</LinkWrapper>
            <ul>
                <li><LinkWrapper to='/conferences'>Conferences</LinkWrapper></li>
            </ul>
        </nav>
    );
}

export default Header;