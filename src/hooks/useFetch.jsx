import {useEffect,useState} from "react";
import {fetchDataFromApi} from '../utils/api';
const useFetch = (url) =>{
    const [data,setdata] = useState(null);
    const [loading,setLoading] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() =>{
        setLoading("Loading...");
        setdata(null);
        setError(null);

        fetchDataFromApi(url)
        .then((res) => {
            setLoading(false);
            setdata(res);
        })
        .catch((err)=>{
            setLoading(false);
            setError("Something went wrong");
        });
    },[url]);
    return{data,loading,error}
};
export default useFetch;