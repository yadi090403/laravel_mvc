import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedUsers, setSubmittedUsers] = useState([]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nama lengkap wajib diisi';
    if (!formData.email) newErrors.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Format email tidak valid';
    if (!formData.username) newErrors.username = 'Username wajib diisi';
    if (!formData.password) newErrors.password = 'Password wajib diisi';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedUsers([...submittedUsers, formData]); // (opsional: hanya untuk demo)
      setFormData({ name: '', email: '', username: '', password: '' });
      setErrors({});
      navigate('/LandingPage'); // 🔁 redirect ke halaman LandingPage
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Registrasi Pengguna
        </h2>

        {['name', 'email', 'username', 'password'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-600 capitalize">
              {field === 'name' ? 'Nama Lengkap' : field}
            </label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors[field] && (
              <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          <a href="/">Daftar </a>
        </button>
      </form>

      {/* List Pendaftar */}
      {submittedUsers.length > 0 && (
        <div className="w-full max-w-md mt-6 bg-white rounded-xl shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Daftar Pendaftar</h3>
          <ul className="space-y-2">
            {submittedUsers.map((user, index) => (
              <li key={index} className="border-b pb-2">
                <p className="text-sm"><strong>Nama:</strong> {user.name}</p>
                <p className="text-sm"><strong>Email:</strong> {user.email}</p>
                <p className="text-sm"><strong>Username:</strong> {user.username}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
