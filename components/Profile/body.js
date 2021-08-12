import MainColumn from '../Post/main-column'
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import HouseRoundedIcon from '@material-ui/icons/HouseRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import Image from 'next/image';

const Body = (props)=>{
    return (
        <div className="bg-gray-900 w-full">
            <div className="flex gap-6 w-[60%] mx-auto">
                <div className="">
                    <LeftSidebar />
                </div>
                <MainColumn setIsFormShow={props.setIsFormShow} posts={props.posts} statusRender={(props.isOwner === true) ? true : false } storyRender={false}/>
            </div>
        </div>
    )
};
export default Body;
const LeftSidebar = () =>{
    return(
        <div className="flex flex-col">
            <About />
            <Picture />
            <Friends />
        </div>
    )
}
const About = ()=> {
    return(
        <div className="text-gray-100 bg-gray-800 mt-4 pt-2 rounded-lg w-[350px]">
            <div className="px-3 py-2">
                <p className="font-bold text-xl">About</p>
            </div>
            <div className="flex px-3 py-2 gap-2">
                <div className="text-gray-400">
                    <WorkRoundedIcon />
                </div>
                <p>Work at <span className="font-medium">Student</span></p>
            </div>
            <div className="flex px-3 py-2 gap-2">
                <div className="text-gray-400">
                    <ImportContactsRoundedIcon />
                </div>
                <p>Studied at <span className="font-medium">THPT Tran Quoc Tuan</span></p>
            </div>
            <div className="flex px-3 py-2 gap-2">
                <div className="text-gray-400">
                    <HouseRoundedIcon />
                </div>
                <p>Lived at <span className="font-medium">Nagasaki</span></p>
            </div>
            <div className="flex px-3 py-2 gap-2">
                <div className="text-gray-400">
                    <RoomRoundedIcon />
                </div>
                <p>From <span className="font-medium">Kquang Ngai, Quang Ngai, Vietnam</span></p>
            </div>
            <div className="flex justify-center bg-gray-700 hover:bg-gray-600 cursor-pointer mx-3 py-1 rounded-lg mb-4">
                <p className="font-medium">Edit</p>
            </div>
            <div className="flex justify-center bg-gray-700 hover:bg-gray-600 cursor-pointer mx-3 py-1 rounded-lg mb-4">
                <p className="font-medium">Add hobby</p>
            </div>
            <div className="flex justify-center bg-gray-700 hover:bg-gray-600 cursor-pointer mx-3 py-1 rounded-lg mb-4">
                <p className="font-medium">Add more information</p>
            </div>
        </div>
    )
}

const Picture = ()=> {
    return(
        <div className="text-gray-100 bg-gray-800 mt-4 pt-2 rounded-lg w-[350px]">
            <div className="px-3 py-2 flex justify-between">
                <p className="font-bold text-xl">Photos</p>
                <div className="hover:bg-gray-700 cursor-pointer p-1 rounded text-blue-500">
                    <a href="">View all Photos</a>
                </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-xl mx-3 h-[325px] mb-6">
                <div className="flex gap-1 justify-between">
                    <div className="hover:brightness-110 cursor-pointer">
                        <Image className="" width={105} height={105} src="https://via.placeholder.com/150" />
                    </div>
                    <div className="hover:brightness-110 cursor-pointer">
                        <Image className="" width={105} height={105} src="https://via.placeholder.com/150" />
                    </div>
                    <div className="hover:brightness-110 cursor-pointer">
                        <Image className="" width={105} height={105} src="https://via.placeholder.com/150" />
                    </div>
                </div>
                <div className="flex gap-1 justify-between">
                    <div className="hover:brightness-110 cursor-pointer">
                        <Image className="" width={105} height={105} src="https://via.placeholder.com/150" />
                    </div>
                    <div className="hover:brightness-110 cursor-pointer">
                        <Image className="" width={105} height={105} src="https://via.placeholder.com/150" />
                    </div>
                    <div className="hover:brightness-110 cursor-pointer">
                        <Image className="" width={105} height={105} src="https://via.placeholder.com/150" />
                    </div>
                </div>
                <div className="flex gap-1 justify-between">
                    <div className="hover:brightness-110 cursor-pointer">
                        <Image className="" width={105} height={105} src="https://via.placeholder.com/150" />
                    </div>
                    <div className="hover:brightness-110 cursor-pointer">
                        <Image className="" width={105} height={105} src="https://via.placeholder.com/150" />
                    </div>
                    <div className="hover:brightness-110 cursor-pointer">
                        <Image className="" width={105} height={105} src="https://via.placeholder.com/150" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Friends = ()=> {
    return(
        <div className="text-gray-100 bg-gray-800 mt-4 pt-2 rounded-lg w-[350px]">
            <div className="px-3 pt-2 flex justify-between">
                <p className="font-bold text-xl">Friends</p>
                <div className="hover:bg-gray-700 cursor-pointer p-1 rounded text-blue-500">
                    <a href="">View all Friend</a>
                </div>
            </div>
            <div className="px-3 pb-4">
                <p className="text-gray-300">445 friends</p>
            </div>
            <div className="flex flex-col mx-3 mb-6 gap-6">
                <div  className="flex gap-2">
                    <div>
                        <div className="overflow-hidden rounded-lg w-[105px] h-[105px] hover:brightness-110 cursor-pointer">
                            <Image className="" width={110} height={110} src="https://via.placeholder.com/150" />
                        </div>
                        <div className="text-sm font-medium cursor-pointer">
                            <p>Truong Ba Dinh</p>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-hidden rounded-lg w-[105px] h-[105px] hover:brightness-110 cursor-pointer">
                            <Image className="" width={110} height={110} src="https://via.placeholder.com/150" />
                        </div>
                        <div className="text-sm font-medium cursor-pointer">
                            <p>Truong Ba Dinh</p>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-hidden rounded-lg w-[105px] h-[105px] hover:brightness-110 cursor-pointer">
                            <Image className="" width={110} height={110} src="https://via.placeholder.com/150" />
                        </div>
                        <div className="text-sm font-medium cursor-pointer">
                            <p>Truong Ba Dinh</p>
                        </div>
                    </div>
                </div>
                <div  className="flex gap-2">
                    <div>
                        <div className="overflow-hidden rounded-lg w-[105px] h-[105px] hover:brightness-110 cursor-pointer">
                            <Image className="" width={110} height={110} src="https://via.placeholder.com/150" />
                        </div>
                        <div className="text-sm font-medium cursor-pointer">
                            <p>Truong Ba Dinh</p>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-hidden rounded-lg w-[105px] h-[105px] hover:brightness-110 cursor-pointer">
                            <Image className="" width={110} height={110} src="https://via.placeholder.com/150" />
                        </div>
                        <div className="text-sm font-medium cursor-pointer">
                            <p>Truong Ba Dinh</p>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-hidden rounded-lg w-[105px] h-[105px] hover:brightness-110 cursor-pointer">
                            <Image className="" width={110} height={110} src="https://via.placeholder.com/150" />
                        </div>
                        <div className="text-sm font-medium cursor-pointer">
                            <p>Truong Ba Dinh</p>
                        </div>
                    </div>
                </div>
                <div  className="flex gap-2">
                    <div>
                        <div className="overflow-hidden rounded-lg w-[105px] h-[105px] hover:brightness-110 cursor-pointer">
                            <Image className="" width={110} height={110} src="https://via.placeholder.com/150" />
                        </div>
                        <div className="text-sm font-medium cursor-pointer">
                            <p>Truong Ba Dinh</p>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-hidden rounded-lg w-[105px] h-[105px] hover:brightness-110 cursor-pointer">
                            <Image className="" width={110} height={110} src="https://via.placeholder.com/150" />
                        </div>
                        <div className="text-sm font-medium cursor-pointer">
                            <p>Truong Ba Dinh</p>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-hidden rounded-lg w-[105px] h-[105px] hover:brightness-110 cursor-pointer">
                            <Image className="" width={110} height={110} src="https://via.placeholder.com/150" />
                        </div>
                        <div className="text-sm font-medium cursor-pointer">
                            <p>Truong Ba Dinh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}