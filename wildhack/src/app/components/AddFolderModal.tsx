import React, { useState } from 'react';

// Modal Component
export default function AddFolderModal({ isOpen, onClose, onAdd }) {
  const [folderName, setFolderName] = useState('');
  const [folderDate, setFolderDate] = useState('');
  const [folderColor, setFolderColor] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Logic to add a new folder
    // Example object you might want to pass to the onAdd function
    onAdd({
      name: folderName,
      datecreated: folderDate,
      color: folderColor,
    });
    setFolderName("");
    setFolderDate("");
    setFolderColor("");
    onClose(); // Close the modal after adding
  };
  const handleClose = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Logic to add a new folder
    // Example object you might want to pass to the onAdd function
    setFolderName("");
    setFolderDate("");
    setFolderColor("");
    onClose(); // Close the modal after adding
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4">Add New Folder</h2>
        
        <div className="mb-4">
          <label htmlFor="folderName" className="block text-sm font-medium text-gray-700">Folder Name</label>
          <input type="text" id="folderName" value={folderName} onChange={(e) => setFolderName(e.target.value)} className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm" required />
        </div>
        
        
        <div className="mb-4">
          <label htmlFor="folderColor" className="block text-sm font-medium text-gray-700">Folder Color</label>
          <select id="folderColor" value={folderColor} onChange={(e) => setFolderColor(e.target.value)} className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm" required>
            <option value="">Select a color</option>
            <option value="red">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
        </div>

        <button type="submit" className="py-2 px-4 bg-red-900 text-white rounded-lg">
          Add Folder
        </button>
        <button type="button" onClick={handleClose} className="ml-2 py-2 px-4 bg-gray-500 text-white rounded-lg">
          Cancel
        </button>
      </form>
    </div>
  );
}
