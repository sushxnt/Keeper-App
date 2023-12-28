import React from "react";



function Footer(){
    const currentYear=new Date().getFullYear();
    return (<div>

        <footer>
            <div>
            <p>Copyright {currentYear}</p>
            </div>
        </footer>
    </div>
    )
}

export default Footer;