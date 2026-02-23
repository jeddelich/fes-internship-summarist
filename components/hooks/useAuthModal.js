import { useState } from "react";

export default function useAuthModal() {

const [activeModal, setActiveModal] = useState(null);

const openLogin = (event) => {
    event.preventDefault();
    setActiveModal("login")
    };

const openSignUp = (event) => {
    event.preventDefault();
    setActiveModal("signup");
};
const openResetPassword = (event) => {
    event.preventDefault();
    setActiveModal("reset");
};

const closeModal = () => { 
    setActiveModal(null)
};

return {
    activeModal,
    setActiveModal,
    openLogin,
    openSignUp,
    openResetPassword,
    closeModal
}

}

