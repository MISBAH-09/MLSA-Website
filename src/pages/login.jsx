import Footer from "../components/footer";

const Login = () => {
  return (
    <div className="min-h-screen pt-24">
      <main className="container mx-auto px-4 py-16 max-w-md">
        <h1 className="text-4xl font-bold mb-6">Sign In</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input className="mt-1 block w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 block w-full border rounded-md p-2" />
          </div>
          <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md">Sign In</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
