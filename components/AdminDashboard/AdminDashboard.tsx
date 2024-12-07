import { axiosConfig } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdAddHomeWork } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { confirmAlert } from 'react-confirm-alert';
import { RiUserSearchLine } from 'react-icons/ri';
import 'react-confirm-alert/src/react-confirm-alert.css';

interface User {
  marketingPermissions: boolean;
  acceptancePrivacyPolicies: boolean;
  _id: string;
  fullname: string;
  email: string;
  __v: number;
}

interface Accommodation {
  _id: string;
  userId: User;
  accomodationId: string;
  __v: number;
  avaibookName: string;
}

export const AdminDashboard = () => {
  const [findAllAccomodations, setFindAllAccomodations] = useState<
    Accommodation[]
  >([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const getAllAccomodations = async () => {
      const res = await axiosConfig.get('/api/accomodations/route');

      setFindAllAccomodations(res.data);
    };

    getAllAccomodations();
  }, []);

  const handleDelete = (id: string) => {
    confirmAlert({
      customUI: ({ title, message, onClose }) => {
        return (
          <div className='bg-p800 pl-8 pr-28 py-10 text-white rounded-xl'>
            <h1 className='text-xl md:text-2xl font-bold'>{title}</h1>

            <p className='text-base md:text-lg mt-2 font-semibold'>{message}</p>

            <button
              onClick={async () => {
                await axiosConfig.delete(`/api/accomodations/route?id=${id}`);
                setFindAllAccomodations((prevAccommodations) =>
                  prevAccommodations.filter((item) => item._id !== id)
                );
                onClose();
              }}
              className='bg-[#1B3C73] py-2 px-6 md:py-2 md:px-8 rounded-xl mt-6 mr-6'
            >
              Sí
            </button>

            <button
              onClick={onClose}
              className='bg-[#1B3C73] py-2 px-6 md:py-2 md:px-8 rounded-xl mt-6'
            >
              No.
            </button>
          </div>
        );
      },
      title: 'Confirmar para eliminar',
      message: '¿Estás seguro de hacer esto?',
    });
  };

  const filteredAccommodations = findAllAccomodations.filter(
    (item) =>
      item.userId?.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.userId?.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='px-2 lg:px-8 space-y-12 mb-24'>
      <div className='border-b-[1px] flex flex-col items-center lg:flex-row lg:items-end justify-between'>
        <p className=' text-black900/[.7]  mt-10 text-2xl text-center md:text-left md:text-3xl lg:mt-16 lg:text-4xl'>
          Alojamientos asignados
        </p>

        <Link
          href={'/private/admin/addAccomodation'}
          className='bg-p600 text-white p-2 rounded-xl mb-4 mt-4 lg:mt-0 lg:mb-2 flex items-center text-sm md:text-base'
        >
          Asignar alojamiento <MdAddHomeWork className='mx-3 text-xl' />
        </Link>
      </div>

      <div className='flex justify-center items-center'>
        <div className='relative'>
          <RiUserSearchLine className='absolute top-3 left-3' />
          <input
            type='text'
            placeholder='Buscar alojamiento por usuario o email'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-[23rem] pl-9 border-solid py-2 rounded-xl bg-gray300/40 placeholder:text-black900/[.7]'
          />
        </div>
      </div>

      {filteredAccommodations.length > 0 ? (
        <div className='flex justify-center items-center'>
          <div className='rounded-2xl overflow-scroll lg:overflow-hidden'>
            <table className='text-center'>
              <thead className='bg-p800 text-white '>
                <tr className='rounded-xl'>
                  <th className='py-3'>Usuario</th>
                  <th>Email</th>
                  <th>Alojamiento</th>
                  <th className='px-4 lg:px-10'>Opcion</th>
                </tr>
              </thead>
              <tbody className='text-sm md:text-base'>
                {[...filteredAccommodations].reverse().map((item, index) => (
                  <tr
                    key={item._id}
                    className={
                      index % 2 === 0 ? 'bg-[#faa477]' : 'bg-[#fcc9ac]'
                    }
                  >
                    <td className='py-4 px-5 lg:py-2 lg:px-10'>
                      {item.userId ? item.userId.fullname : 'N/A'}
                    </td>

                    <td className='py-2 px-5 lg:py-2 lg:px-10'>
                      {item.userId ? item.userId.email : 'N/A'}
                    </td>

                    <td className='py-2 px-5 lg:py-2'>{item.avaibookName}</td>

                    <td className='flex justify-center items-center py-10 lg:py-4'>
                      <RiDeleteBin5Line
                        onClick={() => handleDelete(item._id)}
                        className='cursor-pointer text-black900 text-xl'
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center space-y-8 border-[1px] border-dashed h-[266px] w-[717px]'>
            <p className=' text-black900/[.7] lg:text-3xl'>
              ¡Aún no tienes alojamientos asignados!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
