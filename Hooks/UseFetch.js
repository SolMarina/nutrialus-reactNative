import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, error: null });
    useEffect(() => {

        setState({data:null,  error: null});

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    error: null,
                    data: data

                })
            })
            .catch(error => setState({
                error,
                data: null
            }));

    }, [url])

    return state;


}
 export default useFetch