import Layout from '../components/layout';
import axios from 'axios'; 
import MainColumn from '../components/Post/main-column';
import Messenger from '../components/Messenger/index';


const handleAPI = ()=>{
    const options ={

    }
    return axios('./single-blog' ).then((res)=>{console.log(res)});
}
const Index = ()=> (
    <section className="bg-gray-900 relative">
        <Layout>
            <MainColumn />
        </Layout>
        <Messenger />
    </section>
);
 export default Index;