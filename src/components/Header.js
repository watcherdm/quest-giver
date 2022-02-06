import React from 'react'
import * as styles from './Header.css'

console.log(Object.keys(styles.default))

const Header = (props) => {
    return (<>
        <div id="tsb-text" className="relative header flex flex-row">
            <div className="hexagon hexagon1">
                <div className="hexagon-in1">
                    <div className="text-center hexagon-in2">
                        <span className="q relative left-4 top-1 text-9xl text-black">Q</span>
                        <span className='relative right-4 top-1 text-9xl text-black'>G</span>
                    </div>
                </div>
            </div>
            <div className="basis-1/2 trademark">
                <div className="top-2">Quest Giver Games, LTD Presents</div>
                <h1 className="text-7xl">Darkest Quest</h1>
                <div className="text-right relative -top-4 right-20">A Dark Fantasy Setting by Jesse Brown</div>
            </div>
            <nav className="navigation basis-1/2 flex flex-row cursor-pointer">
                <div className="mt-8 text-center basis-1/4 text-2xl">
                    <span className="hover:border-2 rounded-full p-3 pt-0 pb-0">Scenarios</span>
                </div>
                <div className="mt-8 text-center basis-1/4 text-2xl">
                    <span className="hover:border-2 rounded-full p-3 pt-0 pb-0">Roles</span>
                </div>
                <div className="mt-8 text-center basis-1/4 text-2xl">
                    <span className="hover:border-2 rounded-full p-3 pt-0 pb-0">Abilities</span>
                </div>
                <div className="mt-8 text-center basis-1/4 text-2xl">
                    <span className="hover:border-2 rounded-full p-3 pt-0 pb-0">Treasures</span>
                </div>
            </nav>
            <div id="tsb-spot"/>
        </div>
    </>)
}

export default Header