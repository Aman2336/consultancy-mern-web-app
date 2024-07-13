import  { useState } from 'react';
import axios from 'axios';
import Breadcrumb from '../Components/Breadcrumb';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const { name, email, contactNumber, message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData);
      console.log(res.data);
      alert('Contact details successfully submitted!');
      setFormData({
        name: '',
        email: '',
        contactNumber: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100">
      <section className="bg-cover bg-center h-96 opacity-75" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1333390975/photo/diverse-corporate-team-working-together-in-modern-meeting-room-office.jpg?s=170667a&w=0&k=20&c=fyCU0WZZs_iPG8USzHgmq4FCIMX0GrUozMnoef6JQfA=')" }}>
        <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Contact-Us</h1>
            <nav className="mt-2">
              <Breadcrumb />
            </nav>
          </div>
        </div>
      </section>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              value={contactNumber}
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your contact number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your message"
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
        
      </div>
    </div>
  </div>
  );
}
