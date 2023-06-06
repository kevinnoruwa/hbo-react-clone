import { useStateContext } from "../../Context/HboProvider"

export default function SideNav(){
    const globalState = useStateContext()
    
    

    return ( 
        <div className={`side-nav ${globalState.sideNavOpen && "side-nav-active"}`}>
            <div onClick={globalState.setSideNavOpenAction} className="side-nav_close-btn">
                <i className="fas fa-times"/>
            </div>
            <ul className="side-nav_main">
                <li>
                    <a href="/" className="active">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                        Series
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                        Movies
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                        Originals
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                        Just Added
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                        Last Chance
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                        Coming soon
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                        Trending Now
                    </a>
                </li>

            </ul>
            < div className="side-nav_divider"/>
            <ul className="side-nav_main">
                <li>
                    <a href="/" className="">
                       Action
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Animation
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Comedy
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Crime
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Documentries
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Drama
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Fantasy & Sci-fi
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Horror
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       International
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Kids & Family
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Latino
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Music
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       News/Talk
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Reality
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Romance
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Shorts
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Sports
                    </a>
                </li>
                <li>
                    <a href="/" className="">
                       Suspence
                    </a>
                </li>



            </ul>
 
        </div>

    )
}