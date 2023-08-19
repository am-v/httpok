const Header: React.FC = () => (
  <div className="border-b border-slate-100 h-16 shadow-xs bg-white">
    <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between h-full px-3">
      <a href="/" className="font-medium text-slate-800">
        HTTP<span className="font-semibold">OK</span>
      </a>
    </div>
  </div>
);

export default Header;
