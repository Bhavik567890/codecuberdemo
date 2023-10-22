import { Lock, Shield, Timer, Trash2, X } from "lucide-react";
import React from "react";
import Modal from "react-modal";
import Button from "../button/Button";
import CustomButton from "../custom-button/CustomButton";

Modal.setAppElement("#root");

const CustomModal = ({ event, isOpen, onRequestClose, onDelete, onSave }) => {
  const customStyles = {
    content: {
      width: "400px",
      height: "390px",
      margin: "0 auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Custom Hour Overrides"
      style={customStyles}
    >
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold text-black">
              Custom Hour Overrides
            </h2>
            <div
              onClick={onRequestClose}
              className="cursor-pointer p-1 rounded-full bg-gray-200"
            >
              <X className="h-4 w-4 text-gray-600" />
            </div>
          </div>
          <div className="modal-body">
            <p className="ml-4 text-sm">
              Edit Custom offer value for specific hours of a day.
              <p className="text-sm">you can add maximum 2 overrides per day</p>
            </p>

            <div className="flex items-center gap-x-2 p-3 ml-1">
              <span className="text-zinc-500 text-xs font-semibold">
                Merchant funded offer
              </span>
              <Shield className="w-2 h-2 text-black ml-1" />

              <span className="text-zinc-500 text-xs font-semibold ml-4">
                What Customers get
              </span>
              <Shield className="w-2 h-2 text-black ml-1" />
            </div>
            <div className="flex items-center gap-x-2 p-2">
              <div className="flex items-center rounded-lg bg-gray-200 w-1/2">
                <span className="rounded-l-lg bg-gray-200 text-gray-600 px-2 py-1 font-semibold">
                  35%
                </span>
              </div>
              <div className="flex items-center rounded-lg bg-gray-200 w-1/2">
                <span className="rounded-l-lg bg-gray-200 text-gray-600 px-2 py-1">
                  28.5%
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-2 p-3">
              <div className="flex items-center">
                <Timer className="w-5 h-5 text-black ml-2" />
                <span className="text-zinc-500 text-xs font-semibold ml-2">
                  Mondays
                </span>
              </div>
              <div className="ml-auto flex items-center gap-x-2">
                <div className="flex items-center rounded-lg bg-gray-200">
                  <span className="rounded-l-lg bg-gray-200 text-gray-600 px-2 py-1 font-semibold">
                    10 AM
                  </span>
                </div>
                <span>-</span>
                <div className="flex items-center rounded-lg bg-gray-200">
                  <span className="rounded-l-lg bg-gray-200 text-gray-600 px-2 py-1 font-semibold">
                    11:30 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer mt-16 flex justify-end">
            <button className="bg-red-500 text-white py-2 px-4 rounded mr-2 flex items-center">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Save Custom hours
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
