import { useState } from "react";
import PageLayout from "./components/Layouts/PageLayout";

const App = () => {
  const [sekolah, setSekolah] = useState("SMK Telkom Malang");
  function handleChange(event) {
    setSekolah(event.target.value);
  }
  return (
    <PageLayout>
      <input type="text" onChange={handleChange} />
      <h1 className="text-3xl font-bold underline">{sekolah}</h1>
    </PageLayout>
  );
};

export default App;
