import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;