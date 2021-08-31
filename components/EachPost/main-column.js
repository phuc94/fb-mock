import Post from './post';
import Status from'../Status/index';
import Story from'../Story/index';

const MainColumn =(props)=>{
    console.log(props.posts);
    return (
        <div className="flex flex-col gap-3 flex-grow-1 px-50 mt-4 gap-3 mx-auto max-w-[630px]">
            {/* { props.storyRender &&
                <Story />
            } */}
            { props.statusRender &&
                <Status setIsFormShow={props.setIsFormShow} userAvatar={props.userAvatar}/>
            }
            {props.posts.map(post=>(
                <Post data={post} key={post._id} cookie={props.cookie}/>
            ))}

        </div>
    )
};
export default MainColumn;