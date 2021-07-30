import SearchIcon from '@material-ui/icons/Search';

const SearchHistory = ()=>{
    return (
        <span>history</span>
    )
}

const SearchBar = ()=>{
    return(
        <div className="bg-blue-500 w-full h-20 pt-3">
            <div className="mx-auto max-w-screen-lg">
                <div className="bg-white p-1 flex justify-between focus:ring-2 focus:ring-blue-600">
                    <input className="w-6/12 flex-grow pl-6 outline-none" placeholder="Search.."/>
                    <button className="bg-green-500 ml-1">
                        <SearchIcon className="text-white"/>
                    </button>
                    <select className="outline-none px-2">
                        <option>Store</option>
                        <option>Item</option>
                    </select>
                </div>
                <div className="flex justify-start gap-1">
                    <SearchHistory />
                    <SearchHistory />
                    <SearchHistory />
                    <SearchHistory />
                </div>
            </div>
        </div>

        )
};
export default SearchBar;