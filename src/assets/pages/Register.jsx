import { useState } from "react";

function Register () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(false);
  const validateInput = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !repeatPassword.trim()) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (password !== repeatPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError(false);
    setEmail('');
    setPassword('');
    setRepeatPassword('');
    console.log('Registro exitoso:', { email, password });
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={validateInput}>
      {error ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5" role="alert"><strong className="font-bold">Error!</strong><span className="block sm:inline">{error}</span></div> : null}
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-950">Email</label>
        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@mail.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-950">Password</label>
        <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </div>
      <div className="mb-5">
        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-950">Repeat password</label>
        <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" onChange={(e) => setRepeatPassword(e.target.value)} value={repeatPassword}/>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
    </form>

  );
}

export default Register;