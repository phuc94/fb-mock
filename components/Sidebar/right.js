import Image from "next/image";

const Contact = ()=>{
    return (
        <div className="flex items-center gap-3 py-2 pl-3 hover:bg-gray-700 duration-500 rounded cursor-pointer">
            <Image width='40' height='40' className="rounded-full" src="https://via.placeholder.com/150" />
            <p className="font-medium">Peterson</p>
        </div>
    )
}

const RightSideBar = ()=>{
    return (
        <div className="text-white hidden 2xl:block h-screen bg-gray-900 py-6 px-3 flex flex-col flex-grow-0 w-72 overflow-y-scroll sticky top-10">
            <h3>Your contacts</h3>
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </div>
    )
};
export default RightSideBar;