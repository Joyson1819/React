import React from 'react';
const Footer=() => {
    const date= new Date();

    return (
        <footer>
            <p>You have Login Date &copyRight;: {date.getDate()} Login tomorrow</p>
        </footer>
    )
};

export default Footer;