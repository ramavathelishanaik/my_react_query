

function NotFound() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-red-500 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4xl font-bold">404 - Not Found</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-xl text-gray-600">
            The page you are looking for does not exist.
          </p>
          <p className="mt-4">
            You can go back to the{" "}
            <a href="/" className="text-blue-500 hover:underline">
              home page
            </a>
            .
          </p>
        </div>
      </main>

    
    </div>
  );
}

export default NotFound;
