'use client';
import Modal from "./Modal";
import { useEffect, useRef, useState } from "react";
import useManual from "../hooks/useManual";

const ManualModal = () => {

    const useManualModal = useManual();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true)
        useManualModal.onClose();

    };
    const bodyContent = (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="basic-form">
                        <form className="needs-validation novalidate">
                            <div className="row">
                                <label className="form-label">Iнструкцiя</label>

                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )


    return (
        <Modal
            disabled={isLoading}
            isOpen={useManualModal.isOpen}
            title="Iнструкцiя"
            actionLabel="Submit"
            onClose={useManualModal.onClose}
            body={bodyContent}
            secondaryAction={true}
            onSubmit={handleSubmit}
            size="xl"
        />
    )
}

export default ManualModal;
