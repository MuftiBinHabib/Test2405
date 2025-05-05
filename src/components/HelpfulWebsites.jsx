import React from 'react';

const websites = [
  {
    name: 'MDN Web Docs',
    description: 'Comprehensive resource for web developers with documentation and tutorials.',
    link: 'https://developer.mozilla.org/',
  },
  {
    name: 'freeCodeCamp',
    description: 'Learn to code for free with interactive tutorials and projects.',
    link: 'https://www.freecodecamp.org/',
  },
  {
    name: 'Can I use',
    description: 'Check browser support for HTML, CSS, and JavaScript features.',
    link: 'https://caniuse.com/',
  },
  {
    name: 'Codedex.io',
    description: 'Learn Programming',
    link: 'https://www.codedex.io/',
  },
  {
    name: 'IFIXIT',
    description: 'Repair broken stuff',
    link: 'https://www.ifixit.com/',
  },
  {
    name: 'Wondershare',
    description: 'Edit PDF',
    link: 'https://pdf.wondershare.com/',
  },
  {
    name: 'Instableep',
    description: 'Bleep videos',
    link: 'https://instableep.com/',
  },
  {
    name: 'Klap',
    description: 'Make short form videos',
    link: 'https://klap.app/',
  },
  {
    name: 'Scribe',
    description: 'Make instructions',
    link: 'https://scribehow.com/',
  },
  {
    name: 'Edraw',
    description: 'Make flowcharts',
    link: 'https://www.edraw.ai/',
  },
  {
    name: 'insMind',
    description: 'edit photos',
    link: 'https://www.insmind.com/',
  },
  {
    name: 'slowroads',
    description: 'game',
    link: 'https://slowroads.io/',
  },
  {
    name: 'Shepherd',
    description: 'Learning guide maker',
    link: 'https://shepherd.study/',
  },
  {
    name: 'Democreator',
    description: 'Screen record and presentation maker',
    link: 'https://democreator.wondershare.com/',
  },
  {
    name: 'Vozo.ai',
    description: 'Subtitle and video translator',
    link: 'https://www.vozo.ai/',
  },
  {
    name: 'meeting.ai',
    description: 'Meeting helper',
    link: 'https://meeting.ai/',
  },
 
  


  // Add more websites as needed
];

const HelpfulWebsites = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Helpful Websites</h1>
      <ul className="space-y-4">
        {websites.map((site, index) => (
          <li key={index} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{site.name}</h2>
            <p className="text-gray-700">{site.description}</p>
            <a
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Visit {site.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpfulWebsites;
