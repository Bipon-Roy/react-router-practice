import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, website } = user;
    return (
        <div>
            <h1 className="text-2xl font-medium">Details About User: {name}</h1>
            <p className="text-2xl font-medium">Website :{name}</p>
        </div>
    );
};

export default UserDetails;
