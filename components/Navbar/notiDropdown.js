import Image from 'next/image';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

const NotiDropdown = ()=>{
    return(
        <div className="absolute bg-gray-800 right-0 top-3 rounded-xl w-80 text-white shadow-xl">
            <div className="flex items-center justify-between">
                <p className="pl-3 py-3 text-2xl font-medium">Notification</p>
                <div className="pr-3 text-gray-400">
                    <MoreHorizRoundedIcon />
                </div>
            </div>
            <div className="flex justify-between px-3">
                <p>Recent</p>
                <a href="" className="text-blue hover:bg-gray-700 rounded-lg p-1 px-2">See all</a>
            </div>
            <NotiList />
            <p>Before</p>
            <NotiList />
        </div>
    )
};
export default NotiDropdown;


const NotiList = ()=>{
    return (
        <>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={55} height={55}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-medium">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-300">safasdf</p>
                    <p className="text-gray-300">35 mins ago</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={55} height={55}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-medium">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-300">safasdf</p>
                    <p className="text-gray-300">35 mins ago</p>
                </div>
            </div>
            <div className="m-2 flex cursor-pointer p-2 hover:bg-gray-700 rounded-xl items-center">
                <Image
                    className="group-hover:cursor-pointer rounded-full"
                    width={55} height={55}
                    src='https://via.placeholder.com/150'/>
                <div className="ml-3">
                    <p className="text-white font-medium">Nguyen Truong Trung Phuc</p>
                    <p className="text-gray-300">safasdf</p>
                    <p className="text-gray-300">35 mins ago</p>
                </div>
            </div>
        </>
    )
};