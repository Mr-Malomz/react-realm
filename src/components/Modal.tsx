import { FC, MouseEvent, useState } from 'react';
import CloseIcon from '../assets/svg/CloseIcon';

export interface IModal {
  isOpen: boolean;
  isEdit: boolean;
  closeModal: () => void;
}

const Modal: FC<IModal> = ({ isOpen, isEdit, closeModal }) => {
  const [value, setValue] = useState({
    name: '',
    location: '',
    title: '',
  });

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setValue({ ...value, [target.name]: target.value });
  };

  const handleModal = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('open-nav')) {
      closeModal();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div
      className={`h-screen w-screen bg-indigo-900 bg-opacity-30 z-30 top-0 fixed transform scale-105 transition-all ease-in-out duration-100 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div
        className='flex flex-col justify-center items-center h-full w-full open-nav'
        onClick={handleModal}
      >
        <div className='flex justify-end w-11/12 lg:w-1/2 2xl:w-6/12'>
          <div
            role='button'
            className='cursor-pointer w-6 h-6 rounded-full flex items-center justify-center bg-white'
            onClick={() => closeModal()}
          >
            <CloseIcon />
          </div>
        </div>
        <section className='w-11/12 lg:w-1/2 2xl:w-6/12 bg-white flex justify-center items-center mt-5 rounded-lg'>
          <div className='w-11/12 py-8'>
            <h2 className='capitalize text-xl text-gray-500 font-medium mb-4'>
              {isEdit ? 'Edit User' : 'add user'}
            </h2>
            <form onSubmit={handleSubmit}>
              <fieldset className='mb-4'>
                <label className='block text-sm text-gray-500 capitalize mb-1'>
                  name
                </label>
                <input
                  type='text'
                  name='name'
                  value={value.name}
                  onChange={handleChange}
                  required
                  className='w-full h-10 border border-gray-500 rounded-sm px-4'
                />
              </fieldset>
              <fieldset className='mb-4'>
                <label className='block text-sm text-gray-500 capitalize mb-1'>
                  location
                </label>
                <input
                  type='text'
                  name='location'
                  value={value.location}
                  onChange={handleChange}
                  required
                  className='w-full h-10 border border-gray-500 rounded-sm px-4'
                />
              </fieldset>
              <fieldset className='mb-4'>
                <label className='block text-sm text-gray-500 capitalize mb-1'>
                  title
                </label>
                <input
                  type='text'
                  name='title'
                  value={value.title}
                  onChange={handleChange}
                  required
                  className='w-full h-10 border border-gray-500 rounded-sm px-4'
                />
              </fieldset>
              <button className='text-white capitalize px-6 py-2 bg-indigo-900 rounded-md w-full'>
                save
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Modal;
