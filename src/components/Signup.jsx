function Signup() {
  return (
    <div className="bg-green-100 min-h-screen">
      <header className="bg-green-500 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4xl font-bold">Sign Up</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-500">
            Create an Account
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signup;
