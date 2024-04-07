import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import ChangeColor from "../components/changeColor"; 
import ChangeName from "../components/changeName";
import ChangeLocation from "../components/changeFolderLocation";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [isColorModalOpen, setColorModalOpen] = useState(false);
  const [isNameModalOpen, setNameModalOpen] = useState(false);
  const [isLocationModalOpen, setLocationModalOpen] = useState(false);


  const handleOpenColorModal = () => setColorModalOpen(true);
  const handleCloseColorModal = () => setColorModalOpen(false);
  const handleOpenNameModal = () => setNameModalOpen(true);
  const handleCloseNameModal = () => setNameModalOpen(false);
  const handleOpenLocationModal = () => setLocationModalOpen(true);
  const handleCloseLocationModal = () => setLocationModalOpen(false);
  const handleChangeColor = () => {
    console.log("Adding a new folder...");
  };
  const handleChangeName = () => {
    console.log("Adding a new folder...");
  };
  const handleChangeLocation = () => {
    console.log("Adding a new folder...");
  };

  // Placeholder for selected action, you might want to use this for something
  const [selectedAction, setSelectedAction] = useState('');

  // Handler to open the ChangeColor component with specific action
  const handleAction = (action) => {
    setSelectedAction(action);
    if (action === 'Change Color') {
      handleOpenColorModal();
    } else if (action === 'Rename') {
      handleOpenNameModal();
    }
    else if (action === 'Move Folder') {
      handleOpenLocationModal();
    }else {
      // Handle other actions here
      console.log(`Action chosen: ${action}`);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full text-left px-4 py-2 text-sm'
                  )}
                  onClick={() => handleAction('Remove Folder')}
                >
                  Remove Folder
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full text-left px-4 py-2 text-sm'
                  )}
                  onClick={() => handleAction('Change Color')}
                >
                  Change Color
                </button>
              )}
            </Menu.Item>
            
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full text-left px-4 py-2 text-sm'
                  )}
                  onClick={() => handleAction('Rename')}
                >
                  Rename
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full text-left px-4 py-2 text-sm'
                  )}
                  onClick={() => handleAction('Move Folder')}
                >
                  Move Folder
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
     <ChangeColor isOpen={isColorModalOpen} onClose={handleCloseColorModal} onAdd={handleChangeColor}/>
     <ChangeName isOpen={isNameModalOpen} onClose={handleCloseNameModal} onAdd={handleChangeName}/>
     <ChangeLocation isOpen={isLocationModalOpen} onClose={handleCloseLocationModal} onAdd={handleChangeLocation}/>

    </Menu>
  );
}
