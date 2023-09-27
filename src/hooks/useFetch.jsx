import { useEffect, useState } from "react";

const useFetch = (URL) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState();

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsLoading(false)
            })
            .catch((error) => setIsError(error));
    }, [])

    return { data, isError, isLoading }
}

export default useFetch;