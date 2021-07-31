import Image from 'next/image';

const Story =()=>{
    return (
        <div className="flex flex-row gap-2">
            <div className="h-48 w-2/12 relative transition transform hover:scale-105">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute">
                    <Image className="rounded-full" width={40} height={40} src="https://via.placeholder.com/150" />
                </div>
            </div>
            <div className="h-48 w-2/12 relative transition transform hover:scale-105">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute">
                    <Image className="rounded-full" width={40} height={40} src="https://via.placeholder.com/150" />
                </div>
            </div>
            <div className="h-48 w-2/12 relative transition transform hover:scale-105">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute">
                    <Image className="rounded-full" width={40} height={40} src="https://via.placeholder.com/150" />
                </div>
            </div>
            <div className="h-48 w-2/12 relative transition transform hover:scale-105">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute">
                    <Image className="rounded-full" width={40} height={40} src="https://via.placeholder.com/150" />
                </div>
            </div>
            <div className="h-48 w-2/12 relative transition transform hover:scale-105">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute">
                    <Image className="rounded-full" width={40} height={40} src="https://via.placeholder.com/150" />
                </div>
            </div>
            <div className="h-48 w-2/12 relative transition transform hover:scale-105">
                <Image className="rounded-xl" objectFit='cover' layout='fill' src="https://via.placeholder.com/500" />
                <div className="absolute">
                    <Image className="rounded-full" width={40} height={40} src="https://via.placeholder.com/150" />
                </div>
            </div>
        </div>
    )
}
export default Story;