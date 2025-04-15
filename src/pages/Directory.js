import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Import the auth instance
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';

const Directory = () => {
  const [email, setEmail] = useState(''); // Changed from username
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null); // Store user object
  const [loading, setLoading] = useState(true); // Track initial auth state loading
  const [error, setError] = useState('');

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // Finished loading auth state
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // No need to manually set user state, onAuthStateChanged will handle it
      setPassword(''); // Clear password field after attempt
    } catch (err) {
      console.error("Firebase Login Error:", err);
      // Provide user-friendly error messages
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        setError('Invalid email or password.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else {
        setError('Failed to log in. Please try again.');
      }
      setPassword(''); // Clear password field after failed attempt
    }
  };

  const handleLogout = async () => {
    setError('');
    try {
      await signOut(auth);
      // No need to manually clear user state, onAuthStateChanged will handle it
      setEmail(''); // Clear email field on logout
      setPassword('');
    } catch (err) {
       console.error("Firebase Logout Error:", err);
       setError('Failed to log out. Please try again.');
    }
  };

  // Show loading indicator while checking auth state
  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Member Directory</h1>

      {!currentUser ? (
        // Login Form Section
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <h2 className="text-2xl mb-4">Login Required</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email" // Changed type to email
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Logged In Section (Directory Content)
        <div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Welcome, {currentUser.email}!</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Logout
            </button>
          </div>
          <h2 className="text-2xl mb-4">Photo Gallery</h2>
          {/* --- Google Photos Integration Placeholder --- */}
          <div className="bg-gray-100 p-4 rounded border">
            <p className="text-gray-600">
              Placeholder: Google Photos content will be displayed here after integration.
              This requires setting up Google Cloud credentials, using the Google Photos API,
              and handling authentication/authorization with Google.
            </p>
            {/* Example of where photos might be mapped */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> */}
            {/*   {photos.map(photo => <img key={photo.id} src={photo.baseUrl} alt={photo.filename} className="w-full h-auto rounded"/>)} */}
            {/* </div> */}
          </div>
          {/* --- End Placeholder --- */}
        </div>
      )}
    </div>
  );
};

export default Directory;
