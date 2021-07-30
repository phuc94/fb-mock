import React from "react";
import Link from "next/link";

function Nav (){
    return (
        <div className="flex justify-between px-6 h-10 bg-blue-600 z-50 sticky top-0">
            <div className="pt-2">
                <Link href="/about">
                    <a title='About'>About</a>
                </Link>
            </div>
            <div className="pt-2">
                <Link href="/about">
                    <a title='About'>About</a>
                </Link>
            </div>
            <div className="pt-2">
                <Link href="/about">
                    <a title='About'>About</a>
                </Link>
            </div>
        </div>
    )
}
export default Nav;