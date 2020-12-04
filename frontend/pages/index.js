import Head from 'next/head';
import useSWR from 'swr';
import auth0 from './api/utils/auth0';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const api = 'https://5fbd1bea3f8f90001638cc22.mockapi.io/api/v1/courses';

const fetcher = (url) => fetch(url).then((r) => r.json());

function Home({ courses, user }) {
  const { data, isValidating } = useSWR(api, fetcher, {
    initialData: courses,
  });
  const deleteCourse = async (prop) => {
    const result = confirm('Tem certeza que quer deletar este curso?');
    if (result) {
      //const response = await deleter(`${api}/${prop}`)
      console.log(response);
    }
  };
  return (
    <div className="flex flex-col h-screen justify-between ">
      <Navbar user={user} />

      <main className="max-w-5xl mx-auto px-4 p-20 sm:px-6 lg:px-8 bg-white">
        {!user && (
          <div className="sm:text-center lg:text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Digitalize os serviços</span>
              <span className="block text-secondary-100 xl:inline">
                {' '}
                da sua maternidade
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl ">
              Portfólio de produtos digitalizado, em uma plataforma que
              fornecerá muitos clientes em potencial, aumentando as suas vendas.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
              <div className="rounded-full shadow">
                <a
                  href="/api/login"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-secondary-100 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  <svg
                    className="h-8 w-8 p-1 mr-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span className="mr-5">Login</span>
                </a>
              </div>
            </div>
          </div>
        )}
        {user && (
          <div className="sm:text-center lg:text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Bem-vindo</span>{' '}
              <span className="block text-primary-100 xl:inline">
                {user.name}
              </span>
            </h1>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
              <div className="rounded-full shadow">
                <a
                  href="/cursos"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-100 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Acessar cursos{' '}
                  <svg
                    className="h-8 w-8 p-1 ml-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await auth0.getSession(context.req);
  return {
    props: {
      courses: await fetcher(api),
      user: session?.user || null,
    },
  };
}

export default Home;
