interface FooterListProps {
  children: React.ReactNode;
}

const FooterList: React.FC<FooterListProps> = ({ children }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-6 flex flex-col gap-2">
      {children}
    </div>
  );
};

export default FooterList;
