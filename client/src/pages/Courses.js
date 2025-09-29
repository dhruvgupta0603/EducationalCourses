import { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    api.get("/courses")
      .then(res => setCourses(res.data))
      .catch(()=>setCourses([]))
      .finally(()=>setLoading(false));
  }, []);

  if(loading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold text-center">Explore Our Courses</h1>
      </header>
      <main className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map(c => (
            <div key={c._id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold">
                <Link to={`/courses/${c._id}`}>{c.title}</Link>
              </h3>
              <p className="text-sm">{c.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}