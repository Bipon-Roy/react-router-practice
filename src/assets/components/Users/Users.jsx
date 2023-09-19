import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2 className="text-2xl">Users {users.length}</h2>

            <div className="grid grid-cols-3 gap-4 my-4">
                {users.map((user) => (
                    <User user={user}></User>
                ))}
            </div>
        </div>
    );
};

export default Users;
