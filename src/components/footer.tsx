const Footer: React.FC = () => {
const index = [
  {href:"./main",      text:"Home",},
  {href:"./buy",       text:"Buy",},
  {href:"./sell",      text:"Sell"},
  {href:"./invest",    text:"Invest"},
  {href:"./contactus", text:"Contact Us"},
  {href:"./aboutus",   text:"About Us"},
];
  return (
    <footer className="bg-light-blue text-primary">
      <div className="relative h-2 bg-primary"> </div>
        <div className="md:w-[55rem] mx-[2rem] md:mx-auto grid grid-col-1 md:grid-col-2 grid-flow-col gap-[2rem] pt-[2rem]">
          <div className="relative grid grid-flow-row-dense"> 
            <p className="pl-5 pt-5 md:pt-0 font-zesta text-xl"> 
              {index.map((link, index) => (
                <a key={index} href={link.href} className="mb-4 hover:underline"> {link.text} <br/> </a>
              ))}
            </p>
          </div>
          <div className="relative grid grid-flow-row-dense">
            Location
          </div>
          <div className="relative grid grid-flow-row-dense">
            Contact info
          </div>
        </div>
    </footer>
  );
}
export default Footer;
