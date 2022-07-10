import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(true)

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="text-center h-screen">
      <h1 className="text-3xl font-bold py-10">
        MODAL COMPONENT
      </h1>
      {showModal && <Modal handleClose = {handleClose}>
        <h2 className="text-2xl font-bold pb-3">10% Off Coupon Code!</h2>
        <p className="italic">Use the code <strong className="not-italic">NINJA10</strong> at the checkout.</p>
      </Modal>}
    </div>
  );
}

export default App;
