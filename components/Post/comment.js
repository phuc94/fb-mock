import Image from 'next/image';

const Comment = () => {
    return (
        <div className="px-3 py-3">
            <EachComment />
        </div>
    )
};
export default Comment;

const EachComment = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 text-gray-100">
                <div className="bg-blue-500 relative flex items-center min-w-[35px] h-[35px] rounded-full overflow-hidden">
                    <Image className="" width={35} height={35} src="https://via.placeholder.com/150"/>
                </div>
                <div className="bg-gray-800 py-2 px-4 rounded-2xl">
                    <p className="font-medium text-sm">GameSpot</p>
                    <p className="text-[0.9rem]">GameSpot said something about this post being so great!</p>
                </div>
            </div>
            <div className="flex gap-2 text-gray-100">
                <div className="bg-blue-500 relative flex items-center min-w-[35px] h-[35px] rounded-full overflow-hidden">
                    <Image className="" width={35} height={35} src="https://via.placeholder.com/150"/>
                </div>
                <div className="bg-gray-800 py-2 px-4 rounded-2xl">
                    <p className="font-medium text-sm">GameSpot</p>
                    <p className="text-[0.9rem]">GameSpot said something about this post being so great!</p>
                </div>
            </div>
        </div>
    )
};