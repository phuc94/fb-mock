import Post from './post';
import Status from'../Status/index';
import Story from'../Story/index';

const MainColumn =(props)=>{
    return (
        <div className="flex flex-col xl:gap-16 flex-grow-1 px-50 mt-4 gap-3">
            { !props.storyOnly &&
            <>
                <Story />
                <Status />
            </>
            }
            <Post />
            <Post />
            <Post />
        </div>
    )
};
export default MainColumn;