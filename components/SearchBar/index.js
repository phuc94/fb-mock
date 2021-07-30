import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ()=>{
    return(
        <div className="bg-blue-500 w-full h-16">
            <div className="mx-auto max-w-screen-lg">
                <div className="bg-white p-1 flex justify-between focus:ring-2 focus:ring-blue-600">
                    <input className="w-6/12 flex-grow pl-6 outline-none" placeholder="Search.."/>
                    <button className="bg-green-500 ml-1">
                        <SearchIcon className="text-white"/>
                    </button>
                </div>
            </div>
        </div>

        )
};
export default SearchBar;