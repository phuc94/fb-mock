import Image from 'next/image';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getOwnerData } from '../../services/post';

export const Upper = (props)=>{
    const [ownerData,setOwnerData] = useState(null);
    const router = useRouter();
    useEffect(()=>{
        getOwnerData(props.data.userId)
            .then(res=>{
                setOwnerData(res);
            })
    },[])
    return (
        <div className="flex p-3">
            {ownerData &&
            <>
                <div className="mr-3 cursor-pointer">
                    {ownerData &&
                        <Image src={ownerData.data.avatar == '' ? "https://via.placeholder.com/150" : ownerData.data.avatar}
                            className="rounded-full" width={40} height={40} />
                    }
                </div>
                <div className="flex flex-col text-white">
                    <h3 onClick={()=>{router.push(`/${props.data.userId}`)}}
                        className="cursor-pointer">
                        {ownerData.data.lastName + ' ' + ownerData.data.firstName}
                    </h3>
                    <span className="text-xs text-gray-500 italic ">{props.data.createdAt}</span>
                </div>
            </>
            }
        </div>
    )
}

export const Mid =(props)=>{
    const router = useRouter();
    return (
        <div className="text-gray-100">
            <p className="px-3 pb-2">{props.data.content}</p>
            {!props.noImg &&
                <div className="">
                    { !(props.data.img == '') &&
                        <div onClick={()=>{router.push(`/post/${props.data._id}`)}}
                            className="relative w-full h-96 cursor-pointer">
                            <Image className='object-contain w-full h-full' layout='fill' src={props.data.img} />
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export const Lower= ()=>{
    return (
        <div className="px-3 text-gray-300">
            <div className="flex justify-between py-2">
                <div className="flex gap-2">
                    <ThumbUpAltIcon />
                    <span>1.4k</span>
                </div>
                <div className="flex gap-6">
                    <span>463 Bình luận</span>
                    <span>105 lượt chia sẻ</span>
                </div>
            </div>
            <div className="flex justify-between px-2 py-1 border-b-[1px] border-t-[1px] border-gray-700">
                <div className="flex gap-2 hover:bg-gray-600 duration-300 w-full 
                    justify-center py-1 rounded cursor-pointer">
                    <ThumbUpAltOutlinedIcon />
                    <p className="font-medium">Like</p>
                </div>
                <div className="flex gap-2 hover:bg-gray-600 duration-300 w-full 
                    justify-center py-1 rounded cursor-pointer">
                    <ChatBubbleOutlineRoundedIcon />
                    <p className="font-medium">Comment</p>
                </div>
                <div className="flex gap-2 hover:bg-gray-600 duration-300 w-full 
                    justify-center py-1 rounded cursor-pointer">
                    <ShareIcon />
                    <p className="font-medium">Share</p>
                </div>
            </div>
        </div>
    )
}


const Post = (props)=>{
    return (
        <div className="bg-gray-800 w-[630px] rounded-md text-white max-w-2xl shadow-lg">
            <Upper data={props.data}/>
            <Mid data={props.data}/>
            <Lower />
        </div>
    )
};
export default Post;