import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { postBookMark, removeBookMark } from '../../services/user';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import store from '../../redux/store'
import { bookmarkPost, removeBookmark } from '../../redux/actionCreator'
import { useRouter } from 'next/router';

const PostDropDown = (props)=>{
    const router = useRouter();
    const bookmark = useSelector(state=> state.userData.userData.bookmark);
    const [bookmarked,setBookmarked] = useState(false);
    useEffect(() => {
        if(bookmark){
            if(bookmark.includes(props.data._id)){
                setBookmarked(true);
            }
            else {setBookmarked(false)}
        }
    },[bookmark])
    const handleBookmark = () => {
        if(bookmarked){
            removeBookMark(props.data._id)
                .then(res=>{
                    if (res.status == 200){
                        props.setIsShow(false);
                        store.dispatch(removeBookmark(props.data._id));
                    }
                });
        }
        else{
            postBookMark(props.data._id)
            .then(res=>{
                if (res.status == 200){
                    props.setIsShow(false);
                        store.dispatch(bookmarkPost(props.data._id));
                }
            });
        }
    }
    return(
        <div className="z-50 top-[55px] right-0 bg-gray-800 absolute
            border-[1px] border-gray-700 rounded-xl translate-x-[10px]">
            <div className="p-1 border-b-[1px] border-gray-700">
                <div onClick={handleBookmark}
                    className="flex items-center gap-1 cursor-pointer hover:bg-gray-600 rounded">
                    <div className="text-3xl flex items-center px-1">
                        {bookmarked ? 
                            <DeleteForeverIcon fontSize="inherit"/>
                            :
                            <BookmarkBorderRoundedIcon fontSize="inherit"/>
                        }
                    </div>
                    {bookmarked ? 
                        <div className="pr-2">
                            <p className="font-medium"
                                >Remove from bookmark
                            </p>
                            <span className="text-xs p-0 m-0"
                                >Remove this post from your bookmark.
                            </span>
                        </div>
                        :
                        <div className="pr-2">
                            <p className="font-medium"
                                >Bookmark
                            </p>
                            <span className="text-xs p-0 m-0"
                                >Add this post to your bookmark.
                            </span>
                        </div>
                    }
                </div>
            </div>
            <div className="p-1">
                <div className="flex gap-1 cursor-pointer hover:bg-gray-600 rounded py-2 items-center">
                    <div className="text-3xl flex items-center px-1">
                        <LinkRoundedIcon fontSize="inherit"/>
                    </div>
                    <div onClick={()=>{
                            navigator.clipboard.writeText(window.location.href + props.data._id);
                            props.setIsShow(false);
                        }}
                        className="pr-2">
                        <p>Copy this post's link</p>
                    </div>
                </div>
                <div className="flex gap-1 cursor-pointer hover:bg-gray-600 rounded py-2 items-center">
                    <div className="text-3xl flex items-center px-1">
                        <NotificationsActiveOutlinedIcon fontSize="inherit"/>
                    </div>
                    <div className="pr-2">
                        <p>Turn on Notification for this post</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default PostDropDown;