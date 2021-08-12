import Image from 'next/image';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

const Upper = ()=>{
    return (
        <div className="flex p-3">
            <div className="mr-3 cursor-pointer">
                <Image className="rounded-full" width={40} height={40} src="https://via.placeholder.com/150" />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="cursor-pointer">GameSpot</h3>
                <span className="text-xs text-gray-500 italic ">Yesterday 16:11</span>
            </div>
        </div>
    )
}

const Mid =(props)=>{
    return (
        <div>
            <p className="px-3 pb-2">{props.content}</p>
            <div className="">
                { !(props.img == '') &&
                    <div  className="relative w-full h-96">
                        <Image objectFit='cover' layout='fill' src={props.img} />
                    </div>
                }
            </div>
        </div>
    )
}

const Lower= ()=>{
    return (
        <div className="px-3 text-gray-300">
            <div className="flex justify-between py-2 px-6 border-b-[1px] border-gray-700">
                <div className="flex gap-2">
                    <ThumbUpAltIcon />
                    <span>1.4k</span>
                </div>
                <div className="flex gap-6">
                    <span>463 Bình luận</span>
                    <span>105 lượt chia sẻ</span>
                </div>
            </div>
            <div className="flex justify-between p-2">
                <div className="flex gap-2 hover:bg-gray-600 duration-300 px-16 py-1 rounded cursor-pointer">
                    <ThumbUpAltOutlinedIcon />
                    <p className="font-medium">Like</p>
                </div>
                <div className="flex gap-2 hover:bg-gray-600 duration-300 px-16 py-1 rounded cursor-pointer">
                    <ChatBubbleOutlineRoundedIcon />
                    <p className="font-medium">Thích</p>
                </div>
                <div className="flex gap-2 hover:bg-gray-600 duration-300 px-16 py-1 rounded cursor-pointer">
                    <ShareIcon />
                    <p className="font-medium">Share</p>
                </div>
            </div>
        </div>
    )
}


const Post = (props)=>{
    return (
        <div className="bg-gray-800  rounded-md text-white max-w-2xl">
            <Upper />
            <Mid content={props.content} img={props.img}/>
            <Lower />
        </div>
    )
};
export default Post;