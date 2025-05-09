import React from 'react';

const LocationMap = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179436.27588201468!2d-75.89762208867183!3d45.2502566688436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1667826584152!5m2!1sen!2sca" 
          width="100%" 
          height="450" 
          style={{border: 0}} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ottawa Service Area Map"
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Our Service Areas in Ottawa</h3>
        <p className="text-neutral-600 mb-4">
          We provide cleaning services throughout the Ottawa region, including downtown and the following neighborhoods:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <div className="bg-neutral-50 px-3 py-2 rounded">Kanata</div>
          <div className="bg-neutral-50 px-3 py-2 rounded">Orleans</div>
          <div className="bg-neutral-50 px-3 py-2 rounded">Barrhaven</div>
          <div className="bg-neutral-50 px-3 py-2 rounded">Nepean</div>
          <div className="bg-neutral-50 px-3 py-2 rounded">Gloucester</div>
          <div className="bg-neutral-50 px-3 py-2 rounded">Stittsville</div>
          <div className="bg-neutral-50 px-3 py-2 rounded">Westboro</div>
          <div className="bg-neutral-50 px-3 py-2 rounded">Centretown</div>
          <div className="bg-neutral-50 px-3 py-2 rounded">Sandy Hill</div>
        </div>
        <p className="mt-4 text-neutral-600">
          For areas outside of Ottawa, please contact us to check availability and possible additional travel fees.
        </p>
      </div>
    </div>
  );
};

export default LocationMap;