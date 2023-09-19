import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    };

    return (
        <div>
            <div className="shadow-lg text-center py-4 space-y-2 bg-indigo-100 rounded-xl h-[150px] px-8">
                <h4 className="text-purple-700 text-2xl font-semibold">Post of Id: {id}</h4>
                <p className="font-medium">{title}</p>
                <Link className="text-blue-400 text-lg font-semibold underline" to={`/post/${id}`}>
                    Post Detail
                </Link>
                {/* <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link> */}
                <button onClick={handleShowDetail}>Click to see details</button>
            </div>
        </div>
    );
};

export default Post;
