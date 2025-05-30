const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-white text-gray-700 px-4 sm:px-6 lg:px-12 border-t">
  <div className="max-w-7xl mx-auto">
    {/* Top Section */}
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-8">
      
      {/* Left: Logo & Characters */}
      <div className="flex flex-col sm:flex-row lg:w-1/2 items-center sm:items-start">
        <div className="flex flex-col items-center sm:items-start sm:mr-6 mb-4 sm:mb-0">
          <img src="/images/lo.png" className="w-36 sm:w-40 mb-2" alt="Toys and Toys Logo" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">JO</span>
            <img src="/images/fl.png" className="w-5 h-5" alt="Jordan Flag" />
            <img src="/images/lego.png" className="w-5 h-5" alt="LEGO Logo" />
          </div>
        </div>
        <img src="/images/footer.png" alt="LEGO Characters" className="w-[90%] sm:w-[80%]" />
      </div>

      {/* Right: Links */}
     <div className="grid grid-cols-1 lg:w-1/2 sm:grid-cols-3 gap-6 text-black  w-full">
  {/* أول 3 عناصر */}
  {[0, 1, 2].map((i) => {
    const section = [
      {
        title: 'About us',
        items: ['About Toys n Toys', 'About LEGO', 'Mission', 'Vision', 'Careers', 'Product Certificate'],
      },
      {
        title: 'Support',
        items: ['Contact Us', 'Find Building Instructions', 'Deliveries and Returns', 'Payment Methods', 'Terms & conditions'],
      },
      {
        title: 'More from us',
        items: ['LEGO Magazine', 'LEGO Education', 'LEGO Ideas', 'LEGO Foundation', 'LEGO Braille Bricks', 'Student & offers'],
      },
      {
        title: 'Attractions',
        items: ['LEGO House', 'LEGOLAND Perks', 'LEGOLAND Discovery Centers'],
      },
    ][i];

    return (
      <div key={i}>
        <h4 className="font-bold mb-2">{section.title}</h4>
        <ul className="space-y-2 text-sm">
          {section.items.map((item, j) => (
            <li key={j}>
              <a href="#" className="hover:text-black">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  })}

  {/* العنصر الرابع تحتهم مباشرة */}
  <div className="sm:col-span-3 mt-[-12px]">
    <div>
      <h4 className="font-bold mb-2">Attractions</h4>
      <ul className="space-y-2 text-sm">
        {[
          'LEGO House',
          'LEGOLAND Perks',
          'LEGOLAND Discovery Centers'
        ].map((item, idx) => (
          <li key={idx}>
            <a href="#" className="hover:text-black">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

    </div>

    {/* Bottom Section */}
    <div className="mt-6 border-t pt-6 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-wrap justify-center md:justify-start gap-3 text-black font-bold text-[11px] sm:text-xs text-center md:text-left">
        {['PRIVACY POLICY', 'TERMS OF USE', 'COOKIES', 'LEGAL NOTICE', 'DIGITAL WELLBEING', 'ACCESSIBILITY'].map((link, idx) => (
          <a key={idx} href="#" className="hover:text-gray-900">{link}</a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center md:justify-end gap-3 items-center text-black">
        <span className="font-bold text-sm">Follow Us</span>
        {['Instagram', 'Facebook', 'Youtube', 'Twitter'].map((social, idx) => (
          <a key={idx} href="#" className="hover:text-gray-900 text-sm">{social}</a>
        ))}
      </div>
    </div>

    <div className="text-start my-4 text-xs text-black">
      <p>
        ©2025 BrickWorld Studios. Logo are trademarks of the LEGO Group. Use of this site constitutes acceptance of our Terms of Service and Privacy Policy. Products are intended for users aged 18 and up unless otherwise specified.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
