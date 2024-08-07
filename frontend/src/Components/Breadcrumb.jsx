
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className=" p-3 rounded">
            <ul className="flex justify-center space-x-1s">
                <li>
                    <Link to="/" className="text-black-600 hover:underline">HOME</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <li key={to}>
                            <span className="mx-2">{'>'}</span>
                            <Link to={to} className="text-black-600 hover:underline capitalize">
                                {value}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;