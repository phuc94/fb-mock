import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';

const PostDropDown = (props)=>{
    return(
        <div className="z-50 top-[55px] right-0 bg-gray-800 absolute
            border-[1px] border-gray-700 rounded-xl translate-x-[10px]">
            <div className="p-1 border-b-[1px] border-gray-700">
                <div className="flex items-center gap-1 cursor-pointer hover:bg-gray-600 rounded">
                    <div className="text-3xl flex items-center px-1">
                        <BookmarkBorderRoundedIcon fontSize="inherit"/>
                    </div>
                    <div className="pr-2">
                        <p className="font-medium"
                            >Bookmark
                        </p>
                        <span className="text-xs p-0 m-0"
                            >Add this post to your bookmark
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-1">
                <div className="flex gap-1 cursor-pointer hover:bg-gray-600 rounded py-2 items-center">
                    <div className="text-3xl flex items-center px-1">
                        <LinkRoundedIcon fontSize="inherit"/>
                    </div>
                    <div className="pr-2">
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