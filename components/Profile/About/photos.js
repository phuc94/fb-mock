import Image from 'next/image';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const Photos = () =>{
    return (
        <div className="bg-gray-800 text-gray-300 rounded-xl w-full my-3 max-w-[850px] px-3 pb-3">
            <div className=" py-1"> 
                <p className="text-white text-2xl font-medium">Photos</p>
            </div>
            <div className="flex font-medium mb-3">
                <div className="p-3 border-b-[3px] border-blue-500 cursor-pointer">
                    <p>You included photo</p>
                </div>
                <div className="p-3 hover:bg-gray-600 rounded-lg cursor-pointer duration-200">
                    <p>Your photo</p>
                </div>
                <div className="p-3 hover:bg-gray-600 rounded-lg cursor-pointer duration-200">
                    <p>Album</p>
                </div>
            </div>
            <div className="">
                <div className="flex flex-wrap ">
                    {photoQuantity.map (photo =>(
                    <div className="w-[20%] relative cursor-pointer">
                        <div className="w-[160px] overflow-hidden ">
                            <Image className="rounded-lg" width={160} height={160} src='https://via.placeholder.com/500'/>
                        </div>
                        <div 
                            className="absolute z-10 text-black top-[5px] right-[15px] 
                            text-xl bg-gray-400 bg-opacity-60 rounded-full p-2 h-[30px] w-[30px] 
                            flex items-center justify-center hover:bg-opacity-90"
                            >
                            <EditRoundedIcon fontSize="inherit"/>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className="w-full text-center py-2 bg-gray-600 rounded my-3 
                bg-opacity-60 hover:bg-opacity-100 cursor-pointer duration-200">
                <p>See all</p>
            </div>
        </div>
    )
};
export default Photos;

const photoQuantity = [1,2,3,4,5,6,7,8,9,10]