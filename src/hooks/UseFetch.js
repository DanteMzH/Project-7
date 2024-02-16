import { useEffect, useState } from "react";

export const GetApi = (url, counter) =>{

    const [stateApi, setStateApi] = useState({
        data: [],
        isLoading: true,
        hasError : null,
    })

    const GetFetch = async() =>{

        const response = await fetch(url);    
        const data = await response.json();
        setStateApi({
            data: data,
            isLoading:false,
            hasError:null,
        });

    }

    useEffect(() => {
      GetFetch();

    }, [counter])
    

    return {
        data     :stateApi.data,
        isLoading:stateApi.isLoading,
        hasError:stateApi.hasError,
    }



}


