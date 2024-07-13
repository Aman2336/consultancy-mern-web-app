import Breadcrumb from "../Components/Breadcrumb";
import services from "../main"


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

     
    </div>
  );
}
