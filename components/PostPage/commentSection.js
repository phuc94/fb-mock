import Image from 'next/image';
import { useRef, useState, useEffect } from 'react'
import { addComment } from '../../services/post';
import { getBasicUserData } from '../../services/user';

const CommentSection = (props) => {
    /**
    *   @props postId
    *   @props comments
    *   @props reFetchComment
    *   @props cookie
    */
    return (
        <div className="px-3 py-3 flex flex-col gap-2">
            {props.comments.map(comment=>(
                <EachComment comment={comment}/>
            ))}
            <AddComment postId={props.postId} reFetchComment={props.reFetchComment} cookie={props.cookie}/>
        </div>
    )
};
export default CommentSection;

const EachComment = (props) => {
    const [userData,setUserData] = useState(null);
    useEffect(()=>{
        getBasicUserData(props.comment.userId)
            .then(res=>{setUserData(res.data)})
    },[])
    return (
        <>
            { userData &&
                <div className="flex gap-2 text-gray-100">
                    <div className="flex items-center min-w-[35px] h-[35px] rounded-full overflow-hidden">
                        <img className="" width={35} height={35} src={userData.avatar == '' ? "https://via.placeholder.com/150" : userData.avatar}/>
                    </div>
                    <div className="bg-gray-700 py-2 px-4 rounded-2xl">
                        <p className="font-medium text-sm">{userData.lastName +' '+ userData.firstName}</p>
                        <p className="text-[0.9rem]">{props.comment.comment}</p>
                    </div>
                </div>
            }
        </>
    )
};

const AddComment = (props) => {
    const commentInput = useRef();
    const [commentSubmit,setCommentSubmit] = useState(false)
    const [commentText, setCommentText] = useState();
    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        console.log(props.cookie.user);
        getBasicUserData(props.cookie.user)
            .then(res=>{setUserData(res.data)})
    },[])

    useEffect(()=>{
        commentSubmit ? handleSubmit() : null;
    },[commentSubmit])

    const handleSubmit = () => {
        console.log('submitting');
        const data = {
            postId: props.postId,
            comment:commentText
        }
        addComment(data).then(res=>{
            console.log(res);
            setCommentSubmit(false);
            props.reFetchComment();
        })
    };


    const handleOnKeyPress = (e) => {
        if (e.shiftKey && (e.code === "Enter")){return}
        setCommentText(commentInput.current.innerHTML);
        if (e.code === "Enter"){
            setCommentSubmit(true);
            setTimeout(()=>{commentInput.current.innerHTML = "";},100);
        }
    };
    return (
        <div className="flex gap-2">
            {userData &&
                <>
                    <div className="flex items-center min-w-[35px] h-[35px] rounded-full overflow-hidden">
                        <img className="" width={35} height={35} src={userData.avatar == '' ? "https://via.placeholder.com/150" : userData.avatar}/>
                    </div>
                    <div className="rounded-2xl flex-grow py-2 px-4 outline-none bg-gray-700 w-full">
                        {/* { commentSubmit && */}
                            <span contentEditable role="textbox" className="block max-w-[258px] resize-y outline-none text-gray-100"
                                ref={commentInput} onKeyPress={handleOnKeyPress}
                                >
                            </span>
                        {/* } */}
                    </div>
                </>
            }
        </div>
    )
};
