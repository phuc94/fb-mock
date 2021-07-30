import Layout from '../components/layout';
import axios from 'axios'; 


const handleAPI = ()=>{
    const options ={

    }
    return axios('./single-blog' ).then((res)=>{console.log(res)});
}
const Index = ()=> (
    <section>
        <Layout>
            <h1>Layout Children</h1>
        </Layout>
    </section>
);
 export default Index;