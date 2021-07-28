import React from "react";
import Link from "next/link";

function Nav (){
    return (
        <Link href="/about">
            <a title='About'>About</a>
        </Link>
    )
}
export default Nav;