import Post from './post'
const MainColumn =(props)=>{
    return (
        <div className="flex flex-col xl:gap-16 flex-grow-1 px-60 mt-3">
            <Post />
            <Post />
            <Post />
        </div>
    )
};
export default MainColumn;