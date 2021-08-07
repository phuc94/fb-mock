import Image from 'next/image';
import AddAPhotoRoundedIcon from '@material-ui/icons/AddAPhotoRounded';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

const Header = ()=>{
    return (
        <section className="bg-gray-800 w-full">
            <div className="w-full">
                <div className="w-[960px] mx-auto">
                    <Image className="rounded-l-xl rounded-r-xl" width={960} height={350} src="https://via.placeholder.com/1000" />
                    <div className="flex flex-col items-center">
                        <div className="relative w-[170px]">
                            <div className="absolute w-[178px] h-[178px] -top-44 rounded-full border-[6px] border-gray-800 overflow-hidden hover:brightness-110 transition-100 cursor-pointer">
                                <Image className="" width={200} height={200} src="https://via.placeholder.com/500" />
                            </div>
                            <div className="absolute -top-14 right-0">
                                <div className="text-white p-2 rounded-full bg-gray-600 hover:bg-gray-500 transition-100 cursor-pointer">
                                    <AddAPhotoRoundedIcon />
                                </div>
                            </div>
                        </div>
                        <p className="text-white font-bold text-3xl">Nguyen Truong Trung Phuc</p>
                        <a href="" className="font-medium text-blue-600">Add information</a>
                    </div>
                    <div className="flex justify-center text-white">
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <p>Status</p>
                        </div>
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <p>About</p>
                        </div>
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <p>Friend</p>
                        </div>
                        <div className="p-4 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <p>Picture</p>
                        </div>
                        <div className="flex p-4 hover:bg-gray-700 cursor-pointer rounded-lg">
                            <p>More</p>
                            <ArrowDropDownRoundedIcon />
                        </div>
                        <div className="flex items-center mr-2">
                            <div className="bg-blue-500 flex py-1 px-2 rounded cursor-pointer hover:bg-blue-400">
                                <AddCircleIcon />
                                <p className="font-medium pl-1">Add to story</p>
                            </div>
                        </div>
                        <div className="flex items-center mr-2">
                            <div className="bg-gray-700 flex py-1 px-2 rounded cursor-pointer hover:bg-gray-600">
                                <EditRoundedIcon />
                                <p className="font-medium pl-1">Edit your Profile</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-gray-700 flex py-1 px-2 rounded cursor-pointer hover:bg-gray-600">
                                <MoreHorizRoundedIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Header;