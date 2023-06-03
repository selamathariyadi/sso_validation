import React from 'react'

export default function GantiBackup() {
  return (
    <>
      <div className="conten-bg w-full-[100%] h-[100vh]">
        <div className=" mx-2 h-[50vh]">
          <div className="p-4 border-2 border-gray-400 rounded-md">
            <form action="" className="">
              <div className="grid grid-cols-6 gap-x-16 gap-y-2">
              <div className="sm:col-span-6 flex">
                  <div>
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
                      />
                    </div>
                  </div>
                  <div className="mx-16">
                    <label
                      htmlFor="nik_backup"
                      className="block font-nano text-[16px] ms-1 font-bold leading-6 text-gray-900"
                    >
                      Nik
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="user_backup"
                        id="nik_backup"
                       
                        className=" font-nano block w-[650px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                      />
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
                      Nama
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="description"
                        id="keterangan"
                       disabled
                        className=" font-nano block w-[650px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                      />
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
                  <div className='mx-16'>
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
                       
                        className=" font-nano block w-[650px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-6 flex">
                  <div>
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
                  <div className="mx-16">
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
                      
                      className=" font-nano block w-[650px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                    />
                  </div>
                  </div>
                </div>
                <div className="sm:col-span-6 flex">
                  <div>
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
                        
                        className="font-nano text-[16px] block w-[640px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      >
                        <option >Pilih Lama Backup</option>
                        <option>1 Hari</option>
                        <option>2 Hari</option>
                        <option>3 Hari</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="jabatan"
                    className="block font-nano text-[16px] ms-1 font-bold leading-6 text-gray-900"
                  >
                  
                  </label>
                  <div className="mt-1">
                    <input
                    disabled
                      type="text"
                      name="jabatan"
                      id="jabatan"
                      
                      className=" hidden font-nano  w-[450px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
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
                     
                      className=" font-nano block w-[300px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                    />
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
                      
                      className=" font-nano block w-[300px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                    />
                  </div>
                  </div>
                </div>
                <div className="sm:col-span-6 flex">
                  <div>
                  <label
                    htmlFor=""
                    className="block font-nano text-[16px] ms-1 font-bold leading-6"
                  >
                   
                  </label>
                  <div className="mt-7">
                    <input
                    disabled
                      className=" invisible w-[450px]"
                    />
                  </div>
                  </div>
                  <div className="mx-16">
                  <label
                    htmlFor="description"
                    className="block font-nano text-[16px] ms-1 font-bold leading-6 text-gray-900"
                  >
                    Keterangan Backup
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      
                      className=" font-nano block w-[650px] rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 px-3 text-[16px]"
                    />
                  </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="mt-5 mx-5 flex justify-end items-center">
            <button className="mx-3 w-[120px] bg-white border-2 border-gray-500 py-1 px-3 rounded-xl font-nano text-lg font-semibold text-[#20A94D] hover:bg-[#20A94D] hover:text-white hover:border-[#20A94D]">Simpan</button>
            <button className="mx-3 w-[120px] bg-white border-2 border-gray-500 py-1 px-3 rounded-xl font-nano text-lg font-semibold text-[#20A94D] hover:bg-[#20A94D] hover:text-white hover:border-[#20A94D]">Batal</button>
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}
