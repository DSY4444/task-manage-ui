import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to Task Manager</h1>
        <p className="text-center text-gray-600">This is the home page - under construction</p>
      </div>
    </div>
  );
}