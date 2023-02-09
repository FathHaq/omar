import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route('register'));
  };

  return (
    <>
      <Head title="Register" />

      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-3xl sm:mx-auto">
          <form onSubmit={submit}>

            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div class="max-w-2xl mx-auto">
                <div>
                  <h1 class="text-2xl font-semibold">Login</h1>
                </div>
                <div class="divide-y divide-gray-200">
                  <div class="py-8 text-base leading-6 space-y-10 text-gray-700 sm:text-lg sm:leading-7">

                    <div className='relative'>
                      <input autocomplete="off" id="name" type="text" name="name" value={data.name} class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded-md" placeholder="Full Name" onChange={(e) => onHandleChange(e)} />
                      <label for="name" class="absolute left-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>

                      <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="relative">
                      <input autocomplete="off" id="email" type="email" name="email" value={data.email} class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded-md" placeholder="Email address" onChange={(e) => onHandleChange(e)} />
                      <label for="email" class="absolute left-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>

                      <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="relative">
                      <input autocomplete="off" id="password" type="password" name="password" value={data.password} class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded-md" placeholder="Password" onChange={(e) => onHandleChange(e)} />
                      <label for="password" class="absolute left-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>

                      <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="relative">
                      <input autocomplete="off" id="password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation} class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 rounded-md" placeholder="Password" onChange={(e) => onHandleChange(e)} required />
                      <label for="password_confirmation" class="absolute left-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>

                      <InputError message={errors.password_confirmation} className="mt-2" />

                    </div>

                    <div className="flex items-center justify-end mt-4">
                      <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Already registered?
                      </Link>

                      <PrimaryButton className="bg-blue-500 text-white rounded-md px-4 py-2" processing={processing}>
                        Register
                      </PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
