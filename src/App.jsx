import React from 'react';
import './App.css';
import logo from './assets/logo.png';

function App() {
	return (
		<div className='antialiased'>
			<section className='flex flex-col px-8 md:px-16 max-w-screen-2xl min-h-screen'>
				<header className='py-8'>
					<a href='#'>
						<img src={logo} alt='logo' className='w-9'></img>
					</a>
				</header>
				<section className='flex max-lg:flex-col gap-20 py-10 md:py-20'>
					<section className='flex-1'>
						<h1 className=' font-semibold text-3xl text-[#556600]'>現在就加入驕傲的韭菜</h1>
						<p className='mt-2 text-orange-500 text-lg'>早晚都要公積金，何不現就當韭菜？</p>
						<p className='mt-4 text-lg text-slate-600'>
							Do cillum eiusmod sint qui irure tempor aliquip enim ipsum nostrud exercitation ad.
							Excepteur fugiat exercitation eiusmod anim ea exercitation et proident cillum et ullamco
							occaecat eu. Voluptate sunt laboris aliquip non aliqua. Id laborum occaecat Lorem do. Elit
							non aliquip quis laboris. Laborum anim magna deserunt id minim.
						</p>
					</section>
					<section className='flex-1'>
						<div className='bg-white shadow-xl rounded-lg max-w-lg'>
							<div className='bg-teal-500 p-8 text-white grid place-items-center rounded-t-lg'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='h-16 w-16'>
									<path
										fillRule='evenodd'
										d='M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z'
										clipRule='evenodd'
									/>
								</svg>
							</div>
							<div className='p-10'>
								<p>訂閱驕傲的韭菜農場郵件清單</p>
								<form action='#' className='flex max-sm:flex-col max-sm:gap-3 mt-3'>
									<input
										type='email'
										placeholder='電子郵件地址'
										className='border border-teal-300 px-3 py-2 rounded-md sm:rounded-r-none hover:border-orange-500 focus:outline-none focus:border-slate-500'
									/>
									<button className='bg-teal-500 py-2 sm:px-5 rounded-md sm:rounded-l-none text-white font-semibold'>
										訂閱韭菜農場
									</button>
								</form>
							</div>
						</div>
					</section>
				</section>
				<footer className='py-8 mt-auto'>
					<ul className='flex gap-6 text-sm text-white lg:text-slate-500'>
						<li>About Us</li>
						<li>Contact</li>
						<li>Privacy Policy</li>
					</ul>
				</footer>
			</section>
		</div>
	);
}

export default App;
