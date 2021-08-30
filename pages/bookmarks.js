import Nav from '../components/Navbar';
import LeftSideBar from '../components/Sidebar/left';
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import Image from 'next/image';
import { getBasicUserData, getSuggestFriend, AcceptFriend, friendRequest } from '../services/user';
import { FriendTabLoading } from '../components/Loading/friendTab'
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';

const BookmarkPage = () => {
    const basicUserData = useSelector(state=>state.userData);
    useEffect(()=>{
        
    },[])
    return(
        <div className="bg-gray-900 h-screen">
            {basicUserData &&
            <>
                <div className="fixed top-0 left-0 w-full">
                    <Nav basicUserData={basicUserData}/>
                </div>
                <div className="pt-[55px] flex h-full">
                    <LeftSideBar basicUserData={basicUserData}/>
                    <div className="px-8 pt-8 w-full h-full overflow-y-auto">
                        <BookmarkContainer>
                            <BookmarkTab />
                            <BookmarkTab />
                            <BookmarkTab />
                            <BookmarkTab />
                            <BookmarkTab />
                            <BookmarkTab />
                        </BookmarkContainer>
                    </div>
                </div>
            </>
            }
        </div>
    )
};
export default BookmarkPage;

const BookmarkContainer = (props) => {
    return (
        <div className="text-gray-300">
            <div className=" flex justify-between items-center mb-5">
                <p className="text-xl font-medium">All</p>
                <button className="p-2 bg-gray-700 hover:bg-gray-600 text-3xl flex items-center
                    rounded-lg">
                    <TuneRoundedIcon fontSize="inherit"/>
                </button>
            </div>
            <div className="flex flex-col gap-5">
                {props.children}
            </div>
        </div>
    )
};

const BookmarkTab = (props) => {
    return(
        <div className="text-gray-300 flex gap-5 items-stretch bg-gray-800 p-5 rounded-xl">
            <div className="min-w-[145px] min-h-[145px] w-[145px] h-[145px] rounded-xl overflow-hidden flex-grow">
                <img src="https://via.placeholder.com/150" />
            </div>
            <div className="flex flex-col justify-evenly">
                <p className="text-xl">This is title This is title This is title This is title This is title This is title This is title This is title This is title This is title This is title This is title This is title This is title This is title This is title This is title This is title </p>
                <div className="flex items-center">
                    <div className="w-[20px] h-[20px] rounded-full overflow-hidden">
                        <img className="" src="https://via.placeholder.com/150" />
                    </div>
                        <span className="pl-1 text-gray-500">Saved from</span>
                        <span className="pl-1">Someone's post</span>
                </div>
                <div className="flex gap-3">
                    <button className="p-1 bg-gray-700 hover:bg-gray-600 rounded-lg px-10 font-medium">
                        Add to Favorite
                    </button>
                    <button className="p-1 bg-gray-700 hover:bg-gray-600 rounded-lg">
                        <ShareRoundedIcon />
                    </button>
                    <button className="p-1 bg-gray-700 hover:bg-gray-600 rounded-lg">
                        <MoreHorizRoundedIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}