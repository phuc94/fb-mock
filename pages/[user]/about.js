import Header from '../../components/Profile/header'
import About from '../../components/Profile/About/about'
import Friends from '../../components/Profile/About/friends'
import Photos from '../../components/Profile/About/photos'

const UserAbout = () =>{
    return(
        <section className="bg-gray-900 w-full">
            <Header />
            <div className="flex flex-col items-center pt-5 gap-3">
                <div className="">
                    <About />
                    <Friends friendsData={friendsData}/>
                    <Photos />
                </div>
            </div>
        </section>
    )
};
export default UserAbout;

const friendsData=[
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    {
        name: "Nguyen Thi Do Quyen",
        mutual: 39
    },
    
]