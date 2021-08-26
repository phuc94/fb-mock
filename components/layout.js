import Nav from './Navbar';
import LeftSideBar from './Sidebar/left';
import RightSideBar from './Sidebar/right';

const Layout = (props)=>{
    return(
        <section className="flex flex-col justify-between">
            <Nav basicUserData={props.basicUserData}/>
            <div className="flex justify-between">
                <LeftSideBar basicUserData={props.basicUserData}/>
                <div className="flex-grow">
                    {props.children}
                </div>
                <RightSideBar friends={props.basicUserData.friends} className=""/>
            </div>
            
        </section>
    )
};
export default Layout;