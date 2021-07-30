import Layout from '../components/layout';
import axios from 'axios'; 
import MainColumn from '../components/Post/main-column';

const handleAPI = ()=>{
    const options ={

    }
    return axios('./single-blog' ).then((res)=>{console.log(res)});
}
const Index = ()=> (
    <section>
        <Layout>
            <MainColumn />
        </Layout>
    </section>
);
 export default Index;