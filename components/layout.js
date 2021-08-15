import Nav from './Navbar';
import LeftSideBar from './Sidebar/left';
import RightSideBar from './Sidebar/right';

const Layout = (props)=>{
    return(
        <section className="flex flex-col">
            <Nav basicUserData={props.basicUserData}/>
            <div className="flex justify-between">
                <LeftSideBar className=''/>
                {props.children}
                <RightSideBar className=""/>
            </div>
            
        </section>
    )
};
export default Layout;