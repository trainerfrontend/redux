import useFetch from "../../hooks/useFetch";
import CardItem from "./CardItem";
import { LOCAL_POSTS_URL } from '../../constants/messages'

const Card = () => {
    const { data, isLoading, isError } = useFetch(LOCAL_POSTS_URL);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error...</h1>
    }
    return <section>
        <CardItem usersData={data} />
    </section>
}

export default Card;