import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const OfficeLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState("remote");

  const locations = [
    {
      id: "remote",
      name: "Remote Workspace",
      type: "Work From Home Setup",
      address:
        "Currently operating remotely from Jharkhand, India. Virtual meetings and project discussions are available via Zoom or Google Meet.",
      phone: "+91 8252472186",
      email: "akashkumar.webdev@gmail.com",
      hours: {
        weekdays: "10:00 AM - 8:00 PM",
        saturday: "11:00 AM - 4:00 PM",
        sunday: "Closed",
      },
      coordinates: { lat: 23.6102, lng: 85.2799 },
      features: [
        "100% Remote Collaboration",
        "Zoom / Meet Consultations",
        "Fast Response Time",
        "Flexible Project Scheduling",
      ],
      team: "Akash Kumar & Aditya — 2 Developers",
      specialties: [
        "Next.js & React Development",
        "Frontend Engineering",
        "Mobile App UI",
        "SEO Optimization",
        "Collaborative Projects",
      ],
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    },
  ];

  const currentLocation = locations.find((loc) => loc.id === selectedLocation);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={20} className="text-secondary" />
            </div>
            <span className="text-secondary font-medium">Current Workspace</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Our Work Environment 🌐
          </h2>

          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Akash Kumar & Aditya currently operate remotely from Jharkhand, providing
            full-stack frontend solutions to clients worldwide. Meetings and collaborations
            are done virtually.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Selector */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedLocation === location.id
                      ? "bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10 border-2 border-accent shadow-lg"
                      : "bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10 border border-gray-100 hover:border-gray-200 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedLocation(location.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        selectedLocation === location.id
                          ? "bg-accent/10"
                          : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        name="Laptop"
                        size={20}
                        className={
                          selectedLocation === location.id
                            ? "text-accent"
                            : "text-text-secondary"
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">
                        {location.name}
                      </h3>
                      <p className="text-sm text-text-secondary mb-2">
                        {location.type}
                      </p>
                      <div className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="User" size={14} />
                        <span>{location.team}</span>
                      </div>
                    </div>
                    {selectedLocation === location.id && (
                      <Icon name="Check" size={20} className="text-accent" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              {/* Location Image */}
              <div className="relative h-64 bg-gray-200">
                <img
                  src={currentLocation.image}
                  alt={currentLocation.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-white/90 text-black hover:bg-white"
                    iconName="Video"
                    iconPosition="left"
                    onClick={() =>
                      window.open(
                        "https://meet.google.com/",
                        "_blank",
                        "noopener noreferrer"
                      )
                    }
                  >
                    Schedule Virtual Meet
                  </Button>
                </div>
              </div>

              {/* Location Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {currentLocation.name}
                    </h3>
                    <p className="text-accent font-medium">
                      {currentLocation.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary mb-1">
                      Team
                    </div>
                    <div className="font-semibold text-primary">
                      {currentLocation.team}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                      <Icon name="MapPin" size={16} />
                      <span>Address</span>
                    </h4>
                    <p className="text-text-secondary">
                      {currentLocation.address}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                      <Icon name="Clock" size={16} />
                      <span>Availability</span>
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Mon - Fri:</span>
                        <span className="text-primary">
                          {currentLocation.hours.weekdays}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Saturday:</span>
                        <span className="text-primary">
                          {currentLocation.hours.saturday}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Sunday:</span>
                        <span className="text-primary">
                          {currentLocation.hours.sunday}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                    <Icon name="Phone" size={20} className="text-accent" />
                    <div>
                      <div className="text-sm text-text-secondary">Phone</div>
                      <div className="font-medium text-primary">
                        {currentLocation.phone}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                    <Icon name="Mail" size={20} className="text-accent" />
                    <div>
                      <div className="text-sm text-text-secondary">Email</div>
                      <div className="font-medium text-primary">
                        {currentLocation.email}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentLocation.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">Setup</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentLocation.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="mb-8">
                  <h4 className="font-semibold text-primary mb-4">
                    Approximate Location
                  </h4>
                  <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title={currentLocation.name}
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps?q=${currentLocation.coordinates.lat},${currentLocation.coordinates.lng}&z=10&output=embed`}
                    ></iframe>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    className="bg-accent hover:bg-accent/90"
                    iconName="MessageSquare"
                    iconPosition="left"
                    onClick={() =>
                      window.open(
                        `https://wa.me/918252472186?text=${encodeURIComponent(
                          "Hi Akash & Aditya, I’d like to discuss a project with you."
                        )}`,
                        "_blank"
                      )
                    }
                  >
                    Chat on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    iconName="Mail"
                    iconPosition="left"
                    onClick={() =>
                      (window.location.href = "mailto:akashkumar.webdev@gmail.com")
                    }
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
