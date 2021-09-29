import React, {useState} from 'react';
import Axios from 'axios';

function PostForm(props) {
    const url = "https://gorest.co.in";
    
    const [data, setData] = useState({
        name: "",
        email: "",
        gender: "",
        status: "",
    })
    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    const postData = () => {
        
        const dataForAPI = {
          name: data.name,
          email: data.email,
          gender: data.gender,
          status: data.status
        };
        console.log(dataForAPI);
        
        // MENGGUNAKAN VANILLA JS
        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type' : 'application/json',
        //     },
        //     body: JSON.stringify(dataForAPI)
        // })
        // .then(response => response.json())
        // .then(json => {
        //     console.log('post response', json)
        //     setDataJob(json)
        // })
        
        // MENGGUNAKAN AXIOS
        // Axios.post('https://reqres.in/api/users', dataForAPI)
        //   .then((result) => {
        //     setDataJob(result.data);
        //   })
        //   .catch((error) => console.log('err: ', error));
          Axios.post(url+'/public/v1/users', dataForAPI)
          .then((result) => {
            setData(result.data);   
            console.log('post');     
          })
          .catch((error) => console.log('err: ', error));
        }
    return (
        <div>
            <form>
                <input onChange={e=>handle(e)} id="name" value={data.name} placeholder="name" type="text"/>
                <input onChange={e=>handle(e)} id="email" value={data.email} placeholder="email" type="text"/>
                <input onChange={e=>handle(e)} id="gender" value={data.gender} placeholder="gender" type="text"/>
                <input onChange={e=>handle(e)} id="status" value={data.status} placeholder="status" type="text"/>
                <button onClick={postData}>Submit</button>
            </form>
        </div>
    );
}

export default PostForm;