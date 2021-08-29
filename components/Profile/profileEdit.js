import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useSelector } from 'react-redux';


const ProfileEditForm = (props) => {
    const userData = useSelector(state=>state.userData);
    console.log(userData);
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-80 z-50
            pt-[4rem]">
            <div className="bg-gray-800 max-w-[700px] mx-auto text-gray-300 rounded-xl
                border-[1px] border-gray-700">
                {/* HEADER */}
                <div className="flex justify-between p-3 border-b-[1px] border-gray-700">
                    <div></div>
                    <p className="font-medium text-xl">Add new status</p>
                    <div onClick={()=>{props.setIsEditFormShow(false);document.body.classList.remove('overflow-hidden');}}
                        className="rounded-full h-[25px] flex items-center bg-gray-600
                        text-2xl hover:bg-gray-500 cursor-pointer">
                        <CloseRoundedIcon fontSize="inherit"/>
                    </div>
                </div>
                {/* AVATAR */}
                <div>
                    <div className="flex justify-between p-3">
                        <p className="font-medium text-xl">Avatar</p>
                        <button 
                            className="rounded items-center hover:bg-gray-600 py-1 px-3 text-blue-500">
                            Edit
                        </button>
                    </div>
                    <div className="w-full">
                        <div className="rounded-full overflow-hidden w-[150px] mx-auto">
                            <img src={userData.avatar == '' ? 'https://via.placeholder.com/150' : userData.avatar}/>
                        </div>
                    </div>
                </div>
                {/* COVER */}
                <div>
                    <div className="flex justify-between p-3">
                        <p className="font-medium text-xl">Cover</p>
                        <button 
                            className="rounded items-center hover:bg-gray-600 py-1 px-3 text-blue-500">
                            Edit
                        </button>
                    </div>
                    <div className="w-full">
                        <div className="relative rounded-lg w-[500px] h-[185px] mx-auto">
                            <img className="object-cover"
                                src={userData.avatar == '' ? 'https://via.placeholder.com/500' : userData.avatar}/>
                        </div>
                    </div>
                </div>
                {/* HISTORY */}
                <div>
                    <div className="flex justify-between p-3">
                        <p className="font-medium text-xl">Add new status</p>
                        <button 
                            className="rounded items-center hover:bg-gray-600 py-1 px-3 text-blue-500">
                            Edit
                        </button>
                    </div>
                    <div>
                        
                    </div>
                </div>
                {/* HOBBY */}
                <div>
                    <div className="flex justify-between p-3">
                        <p className="font-medium text-xl">Add new status</p>
                        <button 
                            className="rounded items-center hover:bg-gray-600 py-1 px-3 text-blue-500">
                            Edit
                        </button>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ProfileEditForm;