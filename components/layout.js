import Nav from './Navbar';
import SearchBar from './SearchBar';
import LeftSideBar from './Sidebar/left';
import RightSideBar from './Sidebar/right';

const Layout = (props)=>{
    return(
        <section>
            <Nav />
            <SearchBar />
            <div className="flex justify-between">
                <LeftSideBar />
                {props.children}
                <RightSideBar />
            </div>
            
        </section>
    )
};
export default Layout;