import Image from 'next/image';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getOwnerData, fetchComment, likePost } from '../../services/post';
import CommentSection from './commentSection';

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
                        <div className="min-w-[40px]">
                            <Image src={ownerData.data.avatar == '' ? "https://via.placeholder.com/150" : ownerData.data.avatar}
                                className="rounded-full" width={40} height={40} />
                        </div>
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

export const Lower= (props)=>{
    /**
     * @props data {}
     * @props cookies
     */
    const [comments,setComments] = useState([]);
    const [like,setLike] = useState([]);
    const [postLiked,setPostLiked] = useState(false);
    useEffect(()=>{
        console.log(props.cookie);
        if(props.data.like.includes(props.cookie.user)){
            setPostLiked(true);
        }
        setLike(props.data.like);
    },[])
    const handdleFetchComment = () => {
        console.log(props.data._id)
        fetchComment(props.data._id)
            .then(comments=>{
                console.log(comments.data)
                setComments(prev=>[...prev,...comments.data]);
            })
    };
    const handleLikePost = () =>{
        likePost({postId: props.data._id})
            .then(res=>{
                console.log(res);
                if(res.data.includes(props.cookie.user)){
                    setPostLiked(true);
                } else {setPostLiked(false)}
                setLike(res.data)
            })
    };
    return (
        <>
            <div className="px-3 text-gray-300">
                <div className="flex justify-between py-2">
                    <div className="flex gap-2">
                        <ThumbUpAltIcon />
                        <span>
                            {like.length}
                        </span>
                    </div>
                    <div className="flex gap-6">
                        { props.data.comments.length !== 0 &&
                            <span>{props.data.comments.length} Bình luận</span>
                        }
                    </div>
                </div>
                <div className="flex justify-between px-2 py-1 border-b-[1px] border-t-[1px] border-gray-700">
                    <div onClick={handleLikePost}
                        className={`flex gap-2 hover:bg-gray-600 duration-300 w-full justify-center 
                        py-1 rounded cursor-pointer ${postLiked ? 'text-blue-500' : ''}`}>
                        { postLiked ?
                            <ThumbUpAltIcon />
                            :
                            <ThumbUpAltOutlinedIcon />
                        }
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
}




const Post = (props)=>{
    /**
     * @props data {Post Data}
     * @props key: _id
     */
    return (
        <div className="bg-gray-800 w-full rounded-md text-white shadow-lg">
            <Upper data={props.data}/>
            <Mid data={props.data}/>
            <Lower data={props.data} cookie={props.cookie}/>
        </div>
    )
};
export default Post;