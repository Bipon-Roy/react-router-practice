import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
        <div>
            <div className="shadow-lg text-center py-4 space-y-2 bg-indigo-100 rounded-xl">
                <h2 className="text-purple-700 text-2xl font-semibold">{name}</h2>
                <p className="font-medium">email: {email}</p>
                <p className="font-medium">phone: {phone}</p>
                <Link className="text-blue-400 text-lg font-semibold underline" to={`/user/${id}`}>
                    Show Details
                </Link>
            </div>
        </div>
    );
};

export default User;
