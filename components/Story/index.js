import Image from 'next/image';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import AddIcon from '@material-ui/icons/Add';

const Story =()=>{
    return (
        <div className="flex flex-row gap-2 relative justify-center">
            <div className="h-48 w-2/12 relative transition transform hover:scale-105 duration-100 cursor-pointer ">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute rounded-full border-4 overflow-hidden border-blue-500 top-2 left-2">
                    <Image className="rounded-full" width={30} height={25} src="https://via.placeholder.com/150" />
                </div>
                <div className="absolute bg-gray-700 rounded-b-lg h-12 bottom-0 w-full text-center items-center font-medium text-white">
                    <div className="absolute -top-5 w-full text-white text-4xl flex flex-col items-center">
                        <div className="text-3xl bg-blue-400 rounded-full w-10 h-10 flex justify-center items-center border-4 border-gray-700">
                            <AddIcon fontSize="inherit" />
                        </div>
                    </div>
                    <div className="pt-5">
                        <p>Tạo tin</p>
                    </div>
                </div>
            </div>
            <div className="h-48 w-2/12 relative transition transform hover:scale-105 duration-100 cursor-pointer">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute rounded-full border-4 overflow-hidden border-blue-500 top-3 left-3">
                    <Image className="rounded-full" width={30} height={25} src="https://via.placeholder.com/150" />
                </div>
                <div className="absolute top-40 left-4 font-medium text-white">
                    <p>Got It</p>
                </div>
            </div>
            <div className="h-48 w-2/12 relative transition transform hover:scale-105 duration-100 cursor-pointer">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute rounded-full border-4 overflow-hidden border-blue-500 top-3 left-3">
                    <Image className="rounded-full" width={30} height={25} src="https://via.placeholder.com/150" />
                </div>
                <div className="absolute top-40 left-4 font-medium text-white">
                    <p>Got It</p>
                </div>
            </div>
            <div className="h-48 w-2/12 relative transition transform hover:scale-105 duration-100 cursor-pointer">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute rounded-full border-4 overflow-hidden border-blue-500 top-3 left-3">
                    <Image className="rounded-full" width={30} height={25} src="https://via.placeholder.com/150" />
                </div>
                <div className="absolute top-40 left-4 font-medium text-white">
                    <p>Got It</p>
                </div>
            </div>
            <div className="h-48 w-2/12 relative transition transform hover:scale-105 duration-100 cursor-pointer">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute rounded-full border-4 overflow-hidden border-blue-500 top-3 left-3">
                    <Image className="rounded-full" width={30} height={25} src="https://via.placeholder.com/150" />
                </div>
                <div className="absolute top-40 left-4 font-medium text-white">
                    <p>Got It</p>
                </div>
            </div>
            <div className="hidden sm:block h-48 w-2/12 relative transition transform hover:scale-105 duration-100 cursor-pointer">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute rounded-full border-4 overflow-hidden border-blue-500 top-3 left-3">
                    <Image className="rounded-full" width={30} height={25} src="https://via.placeholder.com/150" />
                </div>
                <div className="absolute top-40 left-4 font-medium text-white">
                    <p>Got It</p>
                </div>
            </div>
            <div className="text-gray-400 absolute -right-5 top-20 rounded-full bg-gray-600 hover:bg-gray-500 duration-100 cursor-pointer w-10 h-10 flex items-center pl-1 text-3xl"> 
                <ArrowRightAltRoundedIcon fontSize="inherit" />
            </div>
        </div>
    )
}
export default Story;