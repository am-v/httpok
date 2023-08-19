import { useLocation } from "react-router-dom";

import Header from "@/common/components/Header";
import ListDisplay from "@/common/components/ListDisplay";
import Footer from "@/common/components/Footer";

import { getErrors } from "@/common/utils/helpers";

const App: React.FC = () => {
  const errors = getErrors(true);
  const { hash } = useLocation();

  return (
    <>
      <Header />
      <div className="my-12" />
      <ListDisplay data={errors} hash={hash} />
      <div className="my-12" />
      <Footer />
    </>
  );
};

export default App;
