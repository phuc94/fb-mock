import Nav from './Navbar';
import LeftSideBar from './Sidebar/left';
import RightSideBar from './Sidebar/right';

const Layout = (props)=>{
    return(
        <section className="flex flex-col justify-between">
            <div className="fixed top-0 left-0 w-full z-40">
                <Nav basicUserData={props.basicUserData}/>
            </div>
            <div className="flex justify-between pt-[55px]">
                <div className="sticky top-[55px]">
                    <LeftSideBar basicUserData={props.basicUserData}/>
                </div>
                <div className="flex-grow">
                    {props.children}
                </div>
                <RightSideBar friends={props.basicUserData.friends} className=""/>
            </div>
            
        </section>
    )
};
export default Layout;