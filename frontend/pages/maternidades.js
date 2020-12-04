import { useState, useEffect } from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import auth0 from './api/utils/auth0';
import { create, read, update, deleter } from './api/utils/crud';
import Router from 'next/router';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

//const api_maternidade = `${process.env.API_URL}/maternidades`;
const api_maternidade = `${process.env.API_URL_MATERNIDADE}`;

function Maternidades({ Maternidades, user }) {
  useEffect(() => {
    if (!user) {
      // redirect to login
      Router.replace(`/`);
    }
  }, [user]);
  const [isOn, setIsOn] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [MaternidadeEdit, setMaternidadeEdit] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { data, isValidating } = useSWR(api_maternidade, read, {
    initialData: Maternidades,
    refreshInterval: 500,
  });
  const noData = data.length == 0;
  const loading = () => {
    setIsLoading(!isLoading);
    setTimeout(function () {
      setIsLoading(isLoading);
    }, 1000);
  };

  const deleteMaternidade = async (prop) => {
    const result = confirm('Tem certeza que quer deletar este curso?');
    if (result) {
      loading();
      const response = await deleter(`${api_maternidade}/${prop}`);
    }
  };

  const addMaternidade = async (obj) => {
    const formatedObj = JSON.stringify(obj);
    const response = create(api_maternidade, formatedObj);
    if (response) {
      loading();
    }
  };
  const updatingMaternidade = async (id) => {
    setIsUpdating(!isUpdating);
    setMaternidadeEdit(id);
  };
  const updateMaternidade = async (MaternidadeId, obj) => {
    const formatedObj = JSON.stringify(obj);
    const response = update(`${api_maternidade}/${MaternidadeId}`, formatedObj);
    if (response) {
      loading();
    }
  };
  const MaternidadeFunctions = {
    addMaternidade,
    deleteMaternidade,
    updateMaternidade,
    loading,
    setIsOn,
    updatingMaternidade,
    setIsUpdating,
    MaternidadeEdit,
    data,
  };
  if (user) {
    return (
      <div className="flex flex-col h-screen justify-between bg-gray-100">
        <Navbar user={user} />
        <header className=" px-2 sm:px-4 lg:px-4 bg-white shadow mb-8">
          <div className="max-w-7xl mx-auto py-1 px-1 sm:px-4 lg:px-6 ">
            <div className="flex justify-between items-center py-6 md:justify-between">
              <h1 className="text-3xl font-bold leading-tight text-gray-600">
                Cursos
              </h1>
              <a
                href="#"
                onClick={() => setIsOn(!isOn)}
                className=" flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-full text-white bg-secondary-100 hover:bg-secondary-50 md:py-2 md:text-lg md:px-7"
              >
                Adicionar curso{' '}
                <svg
                  className="h-8 w-8 p-1 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {isOn && <AddMaternidadeForm parentFunctions={MaternidadeFunctions} />}
        {isUpdating && (
          <UpdateMaternidadeForm parentFunctions={MaternidadeFunctions} />
        )}

        <main className="mb-auto mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="-my-2 sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  {noData && (
                    <p className="p-5">Nenhum resultado encontrado!</p>
                  )}
                  {!noData && (
                    <table className="w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Nome
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Plano
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            CNPJ
                          </th>

                          <th scope="col" className="px-6 py-3 bg-gray-50">
                            <span className="sr-only">Ações</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row) => (
                          <tr key={row.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {row.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {row.plan}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {row.cnpj}
                            </td>
                            <td className="px-6 py-1 whitespace-nowrap text-right text-sm font-medium ">
                              <div className="flex items-center">
                                <a
                                  href="#"
                                  onClick={() => updatingMaternidade(row.id)}
                                  className="w-full flex items-center justify-center text-indigo-600 hover:text-indigo-900"
                                >
                                  <svg
                                    className="h-8 w-8 p-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                  </svg>
                                </a>
                                <a
                                  href="#"
                                  onClick={() => deleteMaternidade(row.id)}
                                  className="w-full flex items-center justify-center text-indigo-600 hover:text-indigo-900"
                                >
                                  <svg
                                    className="h-8 w-8 p-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {isLoading && (
                  <div className="flex justify-center">
                    <svg
                      className="h-20 w-20 p-5 animate-spin animation-reverse text-secondary-100"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return '';
  }
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);

  return {
    props: {
      Maternidades: await read(`${api_maternidade}`),
      user: session?.user || null,
    },
  };
}

export default Maternidades;

function AddMaternidadeForm({ parentFunctions }) {
  const [nome, setNome] = useState('');
  const [plano, setPlano] = useState('');
  const [cnpj, setCnpj] = useState('');
  const closePopup = () => {
    parentFunctions.setIsOn(false);
  };
  const handleNome = (e) => {
    setNome(e.target.value);
  };
  const handlePlano = (e) => {
    setPlano(e.target.value);
  };
  const handleCnpj = (e) => {
    setCnpj(e.target.value);
  };
  const save = () => {
    const Maternidade = {
      name: nome,
      plan: plano,
      cnpj: cnpj,
    };
    parentFunctions.addMaternidade(Maternidade);
    closePopup();
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <form action="#" method="POST">
                <div className="overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <h2 className="py-2 mb-8 text-3xl font-bold leading-tight text-gray-900">
                      Criar curso
                    </h2>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="nome"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          name="nome"
                          id="nome"
                          autoComplete="nome"
                          onChange={handleNome}
                          className="mt-1 p-2 border-2 border-gray-300focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 ">
                        <label
                          htmlFor="plano"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Plano
                        </label>
                        <input
                          type="text"
                          name="plano"
                          id="plano"
                          onChange={handlePlano}
                          className="mt-1 p-2 border-2 border-gray-300focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 ">
                        <label
                          htmlFor="cnpj"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CNPJ
                        </label>
                        <input
                          type="text"
                          name="cnpj"
                          id="cnpj"
                          onChange={handleCnpj}
                          className="mt-1 p-2 border-2 border-gray-300focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={save}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary-100 text-base font-medium text-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={closePopup}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-500 shadow-sm px-4 py-2 bg-secodary-100 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:secondary-100 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpdateMaternidadeForm({ parentFunctions }) {
  const data = parentFunctions.data;
  const MaternidadeId = parentFunctions.MaternidadeEdit;
  let MaternidadeObj = data.filter((item) => {
    return item.id === MaternidadeId;
  });

  const MaternidadeName = MaternidadeObj[0].name;
  const MaternidadePlano = MaternidadeObj[0].plan;
  const MaternidadeCnpj = MaternidadeObj[0].cnpj;
  const [nome, setNome] = useState(MaternidadeName);
  const [plano, setPlano] = useState(MaternidadePlano);
  const [cnpj, setCnpj] = useState(MaternidadeCnpj);
  const closePopup = () => {
    parentFunctions.setIsUpdating(false);
  };
  const handleNome = (e) => {
    setNome(e.target.value);
  };
  const handlePlano = (e) => {
    setPlano(e.target.value);
  };
  const handleCnpj = (e) => {
    setCnpj(e.target.value);
  };
  const save = () => {
    const obj = {
      name: nome,
      plan: plano,
      cnpj: cnpj,
    };
    const MaternidadeId = parentFunctions.MaternidadeEdit;
    parentFunctions.updateMaternidade(MaternidadeId, obj);
    closePopup();
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <form action="#" method="POST">
                <div className="overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <h2 className="py-2 mb-8 text-3xl font-bold leading-tight text-gray-900">
                      Editar curso
                    </h2>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="nome"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          name="nome"
                          id="nome"
                          autoComplete="nome"
                          onChange={handleNome}
                          value={nome}
                          className="mt-1 p-2 border-2 border-gray-300focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 ">
                        <label
                          htmlFor="plano"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Plano
                        </label>
                        <input
                          type="text"
                          name="plano"
                          id="plano"
                          onChange={handlePlano}
                          value={plano}
                          className="mt-1 p-2 border-2 border-gray-300focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 ">
                        <label
                          htmlFor="cnpj"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CNPJ
                        </label>
                        <input
                          type="text"
                          name="cnpj"
                          id="cnpj"
                          onChange={handleCnpj}
                          value={cnpj}
                          className="mt-1 p-2 border-2 border-gray-300focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={save}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary-100 text-base font-medium text-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={closePopup}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-500 shadow-sm px-4 py-2 bg-secodary-100 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:secondary-100 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
