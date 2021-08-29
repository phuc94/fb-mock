import Image from 'next/image';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getOwnerData, fetchComment, likePost } from '../../services/post';
import CommentSection from './commentSection';

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
};

export const Lower= (props)=>{
    /**
     * @props data {}
     */
    const [comments,setComments] = useState(null);
    const [like,setLike] = useState([]);
    useEffect(()=>{
        setLike(props.data.like.length)
    },[])
    const handdleFetchComment = () => {
        console.log(props.data._id)
        fetchComment(props.data._id)
            .then(comments=>{
                console.log(comments.data)
                setComments(comments.data);
            })
    };
    const handleLikePost = () =>{
        likePost({postId: props.data._id})
            .then(res=>{
                console.log(res)
                setLike(res.data)
            })
    };
    return (
        <>
            <div className="px-3 text-gray-300">
                <div className="flex justify-between py-2">
                    <div className="flex gap-2">
                        <ThumbUpAltIcon />
                        <span>{like.length}</span>
                    </div>
                    <div className="flex gap-6">
                        { props.data.comments.length !== 0 &&
                            <span>{props.data.comments.length} Bình luận</span>
                        }
                        {/* <span>105 lượt chia sẻ</span> */}
                    </div>
                </div>
                <div className="flex justify-between px-2 py-1 border-b-[1px] border-t-[1px] border-gray-700">
                    <div onClick={handleLikePost}
                        className="flex gap-2 hover:bg-gray-600 duration-300 w-full
                        justify-center py-1 rounded cursor-pointer">
                        <ThumbUpAltOutlinedIcon />
                        <p className="font-medium">Like</p>
                    </div>
                    <div onClick={handdleFetchComment}
                        className="flex gap-2 hover:bg-gray-600 duration-300 w-full
                        justify-center py-1 rounded cursor-pointer">
                        <ChatBubbleOutlineRoundedIcon />
                        <p className="font-medium">Comment</p>
                    </div>
                    {/* <div className="flex gap-2 hover:bg-gray-600 duration-300 w-full
                        justify-center py-1 rounded cursor-pointer">
                        <ShareIcon />
                        <p className="font-medium">Share</p>
                    </div> */}
                </div>
            </div>
            {comments &&
                <CommentSection comments={comments} postId={props.data._id} reFetchComment={handdleFetchComment} cookie={props.cookie}/>
            }
        </>
    )
};

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
                        <img src={ownerData.data.avatar == '' ? "https://via.placeholder.com/150" : ownerData.data.avatar}
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
};