import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.581398769233!2d-84.30879012082958!3d34.05460742514887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5751b570ecca9%3A0x884dc7d6fda37c85!2sVerizon+Wireless+Amphitheatre+at+Encore+Park!5e0!3m2!1sen!2sus!4v1539089832678" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Atlanta</div>
            </div>

        </div>
    );
};

export default Location;