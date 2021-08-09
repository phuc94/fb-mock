import Post from './post';
import Status from'../Status/index';
import Story from'../Story/index';

const MainColumn =(props)=>{
    return (
        <div className="flex flex-col gap-3 flex-grow-1 px-50 mt-4 gap-3">
            { !props.storyOnly &&
            <>
                <Story />
                <Status setIsFormShow={props.setIsFormShow}/>
            </>
            }
            {props.posts.map(post=>(
                <Post content={post.body} img={post.img}/>
            ))}

        </div>
    )
};
export default MainColumn;