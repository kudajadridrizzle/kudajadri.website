import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl sm:text-8xl font-ivy font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-ivy text-secondary mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 font-albertSans text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition duration-300"
        >
          Return to Home
        </Link>
        
        <div className="mt-12">
          <p className="text-gray-500 text-sm font-albertSans">
            Need help?{' '}
            <Link to="/contact" className="text-primary hover:underline">
              Contact our support
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
