import React, { useState } from 'react';

// Modal Component
export default function AddClassModel({ isOpen, onClose, onAdd }) {
  const [className, setClassName] = useState('');
  const [classDate, setClassDate] = useState('');
  const [classOwner, setClassOwner] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Logic to add a new folder
    // Example object you might want to pass to the onAdd function
    onAdd({
      name: className,
      datecreated: classDate,
      owner: classOwner,
    });
    setClassName("");
    setClassDate("");
    setClassOwner("");
    onClose(); // Close the modal after adding
  };
  const handleClose = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Logic to add a new folder
    // Example object you might want to pass to the onAdd function
    setClassName("");
    setClassDate("");
    setClassOwner("");
    onClose(); // Close the modal after adding
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4">Add New Class</h2>
        
        <div className="mb-4">
          <label htmlFor="folderName" className="block text-sm font-medium text-gray-700">Class Name</label>
          <input type="text" id="folderName" value={className} onChange={(e) => setClassName(e.target.value)} className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm" required />
        </div>
        
      
        <button type="submit" className="py-2 px-4 bg-red-900 text-white rounded-lg">
          Add Class
        </button>
        <button type="button" onClick={handleClose} className="ml-2 py-2 px-4 bg-gray-500 text-white rounded-lg">
          Cancel
        </button>
      </form>
    </div>
  );
}
