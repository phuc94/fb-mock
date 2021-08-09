import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import HouseRoundedIcon from '@material-ui/icons/HouseRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import Image from 'next/image';

const About = () =>{
    return (
        <div className="flex flex-row bg-gray-800 text-gray-300 rounded-xl max-w-[850px] p-3">
            <div className="font-medium text-gray-400 w-[280px]">
                <div className=" px-3 py-1">
                    <h className="text-white text-2xl font-medium">About</h>
                </div>
                <div className="px-2 py-1 bg-gray-700 rounded-lg cursor-pointer">
                    <p className="text-blue-500">Overview</p>
                </div>
                <div className="px-2 py-1 hover:bg-gray-700 rounded-lg cursor-pointer duration-200">
                    <p>Jobs and study</p>
                </div>
                <div className="px-2 py-1 hover:bg-gray-700 rounded-lg cursor-pointer duration-200">
                    <p>Lived places</p>
                </div>
                <div className="px-2 py-1 hover:bg-gray-700 rounded-lg cursor-pointer duration-200">
                    <p>General contact</p>
                </div>
            </div>
            <div className="w-[590px]">
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
            </div>
        </div>
    )
};
export default About;