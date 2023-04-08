import React from 'react';

const Header = () => {
   return(
    <nav className="flex sm:justify-center space-x-4 ml-0.5">
    {[
      ['Home', '/dashboard'],
      ['Product', '/product'],
      ['FAQ', '/faq'],
      ['Contact', '/contact'],
    ].map(([title, url]) => (
      <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
    ))}
  </nav>
   );
};

export default Header;