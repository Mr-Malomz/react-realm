import { useState } from 'react';
import UserIcon from './assets/svg/UserIcon';
import Modal from './components/Modal';

function App() {
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleModalClose = () => {
    setModal(false);
    setIsEdit(false);
  }

  return (
    <div className=''>
      <header className='h-16 w-full bg-indigo-200 px-6 flex justify-between items-center'>
        <h1 className='text-xl text-indigo-900'>React-Realm</h1>
        <button
          className='text-lg text-white capitalize px-6 py-2 bg-indigo-900 rounded-md'
          onClick={() => setModal(true)}
        >
          create
        </button>
      </header>
      <section className='mt-10 flex justify-center px-6'>
        <ul className='w-full'>
          <li className='border-2 p-6 mb-3 rounded-lg flex items-center'>
            <section className='h-10 w-10 bg-indigo-100 rounded-md flex justify-center items-center mr-4'>
              <UserIcon />
            </section>
            <section className=''>
              <h2 className='capitalize font-semibold mb-1'>daniel mark</h2>
              <p className='capitalize text-gray-500 mb-1'>new york</p>
              <p className='capitalize text-indigo-500 font-medium text-sm mb-2'>
                software engineer
              </p>
              <div className='flex'>
                <button className='text-sm text-red-500 capitalize px-4 py-2 mr-4 border border-red-500 rounded-md'>
                  delete
                </button>
                <button
                  className='text-sm text-white capitalize px-4 py-2 bg-indigo-900 rounded-md'
                  onClick={() => {
                    setModal(true);
                    setIsEdit(true);
                  }}
                >
                  edit
                </button>
              </div>
            </section>
          </li>
        </ul>
      </section>
      <Modal isOpen={modal} isEdit={isEdit} closeModal={handleModalClose} />
    </div>
  );
}

export default App;
