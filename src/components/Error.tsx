import {Link} from 'react-router-dom';
import ErrorIcon from '@mui/icons-material/Error';

const Error = () => {
    return (
        <div className="text-center mt-5 p-5">
            <div className="mb-5">
                <h1 className="text-2xl text-red-700">The page that you are trying to access cannot be reached.  Please try again.</h1>
                <ErrorIcon className="text-red-700 mt-5" fontSize="large" />
            </div>
            <div className="flex flex-row justify-center align-center">
                <Link to="/" className="text-blue-700 text-xl underline ml-2">Go Home</Link>
            </div>
        </div>
    )
}

export default Error
