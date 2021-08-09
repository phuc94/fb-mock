import Image from 'next/image';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';

const Status = (props)=>{
    return (
        <div className="bg-gray-800 rounded-md p-3">
            <div className="flex items-center mb-2">
                <div className="mr-3 px-1">
                    <Image className="rounded-full" width={45} height={45} src="https://via.placeholder.com/150" />
                </div>
                <div onClick={()=> {props.setIsFormShow(true);document.body.classList.add('overflow-hidden');}}
                    className="w-full h-10 bg-gray-700 hover:bg-gray-600 duration-300 cursor-pointer flex items-center text-white px-5 rounded-full ">
                    <p>Nguyen, What's in your mind?</p>
                </div>
            </div>
            <div className="flex items-center mt-2 border-t-[1px] border-gray-700">
                <div className="text-red-500 w-full hover:bg-gray-700 duration-300 py-2 rounded-lg cursor-pointer flex gap-1 justify-center text-center">
                    <VideoCallIcon />
                    <p className="text-gray-300 font-medium">Live Stream</p>
                </div>
                <div className="text-green-500 w-full hover:bg-gray-700 duration-300 py-2 rounded-lg cursor-pointer flex gap-1 justify-center text-center">
                    <PhotoLibraryRoundedIcon />
                    <p className="text-gray-300 font-medium">Photo/Video</p>
                </div>
                <div className="text-yellow-500 w-full hover:bg-gray-700 duration-300 py-2 rounded-lg cursor-pointer flex gap-1 justify-center text-center">
                    <InsertEmoticonRoundedIcon />
                    <p className="text-gray-300 font-medium">Emotion/Activity</p>
                </div>
            </div>
        </div>
    )
};
export default Status;