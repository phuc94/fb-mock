import Image from 'next/image';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
const Friends = (props) =>{
    return (
        <div className="bg-gray-800 text-gray-300 rounded-xl w-full mt-3 max-w-[850px]">
            <div className=" px-3 py-1"> 
                <p className="text-white text-2xl font-medium">Friends</p>
            </div>
            <div className="flex font-medium mb-3">
                <div className="p-3 border-b-[3px] border-blue-500 cursor-pointer">
                    <p>All friends</p>
                </div>
                <div className="p-3 hover:bg-gray-600 rounded-lg cursor-pointer duration-200">
                    <p>Recently added</p>
                </div>
                <div className="p-3 hover:bg-gray-600 rounded-lg cursor-pointer duration-200">
                    <p>Work</p>
                </div>
                <div className="p-3 hover:bg-gray-600 rounded-lg cursor-pointer duration-200">
                    <p>Same school</p>
                </div>
            </div>
            <div className="px-3">
                <div className="flex flex-wrap">
                    {props.friendsData.map(item=>(
                    <div className="flex flex-row items-center gap-3 w-6/12 p-2">
                        <div className="w-[100px] overflow-hidden">
                            <Image className="rounded-lg hover:brightness-110 cursor-pointer" 
                                width={80} height={80} src='https://via.placeholder.com/150'/>
                        </div>
                        <div className="flex-grow flex justify-between w-full items-center">
                            <div>
                                <p className="cursor-pointer font-medium">{item.name}</p>
                                <p className="cursor-pointer hover:underline text-xs text-gray-400">
                                    {item.mutual} mutual friends
                                </p>
                            </div>
                            <div className="p-1 hover:bg-gray-700 rounded-full cursor-pointer">
                                <MoreHorizRoundedIcon />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
export default Friends;