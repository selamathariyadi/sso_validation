import React, { useState } from "react";


export const TambahBackup = () => {
  const [formData,setFormData] = useState({
    nik:'',
    description: '',
    unitkerjaBackup: '',
    kodeGroup: '',
    duration: '',
    starDate:''
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform further actions
      console.log('Form submitted:', formData);
      alert('Tambah User Backup Succes');
      
    }
  };
  const validateForm = (data) => {
    const errors = {};

    // Apply validation rules to each form field
    if (data.nik.trim() === '') {
      errors.nik = 'Field Tidak Boleh Kosong';
    }else if (!isNumeric(data.nik)) {
      errors.nik = 'Nik harus berupa Angka';
    } else if (data.nik.length < 12) {
      errors.nik = 'Minimal Nik 12';
    }
    
    
    if (data.unitkerjaBackup.trim() === '') {
      errors.unitkerjaBackup = 'Field Tidak Boleh Kosong';
    }
    if (data.kodeGroup.trim() === '') {
      errors.kodeGroup = 'Field Tidak Boleh Kosong';
    }
    if (data.duration.trim() === '') {
      errors.duration = 'Field Tidak Boleh Kosong';
    }
    if (data.description.trim() === '') {
      errors.description = 'Field Tidak Boleh Kosong';
    }
    if (data.starDate.trim() === '') {
      errors.starDate = 'Field Tidak Boleh Kosong';
    }
    return errors;
  };

  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };
  return (
    <>
      <div className="conten-bg w-full-[100%] h-[100vh]">
        <div className=" mx-2 h-[50vh]">
          <div className="p-4 border-2 border-gray-400 rounded-md">
            <form  className="" onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-x-16 gap-y-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="nik"
                    className="block font-nano text-[16px] ms-1 font-bold leading-6 text-gray-900"
                  >
                    Nik
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="nik"
                      id="nik"
                      className=" font-nano block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                      onChange={handleInput}
                     
                    />
                    {errors.nik && <p className="m-2 text-red-700 font-nano font-semibold">{errors.nik}</p>}
                  </div>
                </div>
                <div className="sm:col-span-4 flex mx-20">
                  <div className="mx-5">
                    <label
                      htmlFor="unitBackup"
                      className="font-nano text-[16px] font-bold leading-6 text-gray-900"
                    >
                      Unit Kerja
                    </label>
                    <div className="mt-1">
                      <select
                        id="unitBackup"
                        name="unitkerjaBackup"
                        onChange={handleInput}
                        className=" font-nano text-[16px] block w-[300px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      >
                        <option>Pilih Unit Kerja yang dibackup</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      {errors.unitkerjaBackup && (
                        <p className="m-2 text-red-700 font-nano font-semibold">{errors.unitkerjaBackup}</p>
                      )}
                    </div>
                  </div>
                  <div className="mx-5">
                    <label
                      htmlFor="last-name"
                      className="font-nano text-[16px]   font-bold leading-6 text-gray-900"
                    >
                      Group Backup
                    </label>
                    <div className="mt-1">
                      <select
                        onChange={handleInput}
                        id="kode_group"
                        name="kodeGroup"
                        className=" font-nano text-[16px] block w-[300px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      >
                        <option>Kode group - Nama group </option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                      {errors.kodeGroup && (
                        <p className="m-2 text-red-700 font-nano font-semibold">{errors.kodeGroup}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-6 flex">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-nano text-[16px] ms-1 font-bold leading-6 text-gray-900"
                    >
                      Nama
                    </label>
                    <div className="mt-1">
                      <input
                        disabled
                        type="text"
                        name="nama_pegawai"
                        id="name"
                        className=" font-nano block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                      />
                    </div>
                  </div>
                  <div className="mx-16">
                    <label
                      htmlFor="keterangan"
                      className="block font-nano text-[16px] ms-1 font-bold leading-6 text-gray-900"
                    >
                      Keterangan Backup
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="description"
                        id="keterangan"
                        onChange={handleInput}
                        className=" font-nano block w-[640px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                      />
                      {errors.description && (
                        <p className="m-2 text-red-700 font-nano font-semibold">{errors.description}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-6 flex">
                  <div>
                    <label
                      htmlFor="unitKerja"
                      className="block font-nano text-[16px] ms-1 font-bold leading-6 text-gray-900"
                    >
                      Unit Kerja
                    </label>
                    <div className="mt-1">
                      <input
                        disabled
                        type="text"
                        name="unitKerja"
                        id="unitKerja"
                        className=" font-nano block w-[450px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                      />
                    </div>
                  </div>
                  <div className="mx-16">
                    <label
                      htmlFor="durasiBackup"
                      className="block font-nano text-[16px] ms-1 font-bold leading-6 text-gray-900"
                    >
                      Durasi Backup
                    </label>
                    <div className="mt-1">
                      <select
                        id="durasiBackup"
                        name="duration"
                        onChange={handleInput}
                        className="font-nano text-[16px] block w-[640px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      >
                        <option>Pilih Lama Backup</option>
                        <option>1 Hari</option>
                        <option>2 Hari</option>
                        <option>3 Hari</option>
                      </select>
                      {errors.duration && (
                        <p className="m-2 text-red-700 font-nano font-semibold">{errors.duration}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="jabatan"
                    className="block font-nano text-[16px] ms-1 font-bold leading-6 text-gray-900"
                  >
                    Jabatan
                  </label>
                  <div className="mt-1">
                    <input
                      disabled
                      type="text"
                      name="jabatan"
                      id="jabatan"
                      className=" font-nano block w-[450px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4 flex mx-20">
                  <div className="mx-5">
                    <label
                      htmlFor="starDate"
                      className="font-nano text-[16px] font-bold leading-6 text-gray-900"
                    >
                      Tanggal Mulai Backup
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        name="starDate"
                        id="starDate"
                        onChange={handleInput}
                        className=" font-nano block w-[300px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                      />
                      {errors.starDate && (
                        <p className="m-2 text-red-700 font-nano font-semibold">{errors.starDate}</p>
                      )}
                    </div>
                  </div>
                  <div className="mx-5">
                    <label
                      htmlFor="endDate"
                      className="font-nano text-[16px]   font-bold leading-6 text-gray-900"
                    >
                      Tanggal Akhir Backup
                    </label>
                    <div className="mt-1">
                      <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        disabled
                        className=" font-nano block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="userID"
                    className="block font-nano text-[16px] ms-1 font-bold leading-6 text-gray-900"
                  >
                    User ID Backup
                  </label>
                  <div className="mt-1">
                    <input
                      disabled
                      type="text"
                      name="uidbkp"
                      id="userID"
                      className=" font-nano block w-[450px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="mt-5 mx-5 flex justify-end items-center">
              <button
                className="mx-3 w-[120px] bg-white border-2 border-gray-500 py-1 px-3 rounded-xl font-nano text-lg font-semibold text-[#20A94D] hover:bg-[#20A94D] hover:text-white hover:border-[#20A94D]"
                type="submit"
               onClick={handleSubmit}
              >
                Simpan
              </button>
              <button className="mx-3 w-[120px] bg-white border-2 border-gray-500 py-1 px-3 rounded-xl font-nano text-lg font-semibold text-[#20A94D] hover:bg-[#20A94D] hover:text-white hover:border-[#20A94D]">
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
