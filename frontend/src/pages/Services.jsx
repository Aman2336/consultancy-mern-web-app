import Breadcrumb from "../Components/Breadcrumb";


const services = [
  {
    title: 'Financial Planning',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon:'/assests/img1.jpg',
  },
  {
    title: 'Investments Management',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon:'/assests/img2.jpg', 
  },
  {
    title: 'Business Loan',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon:'/assests/img3.jpg',
  },
  {
    title: 'Taxes Consulting',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon:'/assests/img4.jpg',
  },
  {
    title: 'Insurance Consulting',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon:'/assests/img5.jpg',
  },
  {
    title: 'Retirement Planning',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon:'/assests/img6.jpg',
  },
  {
    title: 'Risk Management',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon:'/assests/img7.jpg',
  },
  {
    title: 'Technology Consulting',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia.',
    icon:'/assests/img8.jpg',
  },
];

export default function Services() {
  return (
    <div className="bg-gray-100">
      <section className="bg-cover bg-center h-96 opacity-75" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1333390975/photo/diverse-corporate-team-working-together-in-modern-meeting-room-office.jpg?s=170667a&w=0&k=20&c=fyCU0WZZs_iPG8USzHgmq4FCIMX0GrUozMnoef6JQfA=')" }}>
        <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Services</h1>
            <nav className="mt-2">
              <Breadcrumb />
            </nav>
          </div>
        </div>
      </section>

      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Our Exclusive Services We Offer For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 ">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:bg-gray-200">
              <img src={service.icon} alt={service.title} className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold">Raghav Gupta</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <div className="mt-4">
              <a href="#" className="text-white mr-2">Facebook</a>
              <a href="#" className="text-white mr-2">Twitter</a>
              <a href="#" className="text-white">Instagram</a>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul>
              {services.slice(0, 4).map((service, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-gray-400">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <div>
              <a href="#" className="text-gray-400">Incorporation is a big milestone for business</a>
              <p className="text-gray-600">July. 10, 2024 by Raghav Gupta</p>
            </div>
            <div className="mt-4">
              <a href="#" className="text-gray-400">Incorporation is a big milestone for business</a>
              <p className="text-gray-600">July. 10, 2024 by Raghav Gupta</p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h3 className="text-lg font-bold mb-4">Have a Questions?</h3>
            <p className="text-gray-400">203 Jankapuri East New Delhi</p>
            <p className="text-gray-400">+2 392 3929 210</p>
            <p className="text-gray-400">info@yourdomain.com</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 All rights reserved |This Section build by <span className="text-red-500">&hearts;</span> Raghav Gupta</p>
        </div>
      </footer>
    </div>
  );
}
