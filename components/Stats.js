/* This example requires Tailwind CSS v2.0+ */
import { UsersIcon } from '@heroicons/react/24/outline';

export function Stats() {
	return (
		<div className="relative bg-white mb-52">
			<div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
				<img
					className="h-full w-full object-cover"
					src="./assets/phone.jpg"
					alt="Support team"
				/>
			</div>
			<div className="relative mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
				<div className="mx-auto max-w-xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
					<div>
						<div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
							<UsersIcon className="h-6 w-6" aria-hidden="true" />
						</div>
					</div>
					<h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						La <span className="inline text-indigo-600">solution</span> à tout
						les problèmes admnistratifs
					</h2>
					<p className="mt-6 text-lg text-gray-500">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
						nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus
						omnis, molestiae esse placeat, exercitationem magnam quod molestias
						quia aspernatur deserunt voluptatibus.
					</p>
					<div className="mt-8 overflow-hidden">
						<dl className="-mx-8 -mt-8 flex flex-wrap">
							<div className="flex flex-col px-8 pt-8">
								<dt className="order-2 text-base font-medium text-gray-500">
									Disponible
								</dt>
								<dd className="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">
									24/7
								</dd>
							</div>
							<div className="flex flex-col px-8 pt-8">
								<dt className="order-2 text-base font-medium text-gray-500">
									Satisfaction utilisateurs
								</dt>
								<dd className="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">
									99.9%
								</dd>
							</div>
							<div className="flex flex-col px-8 pt-8">
								<dt className="order-2 text-base font-medium text-gray-500">
									Utilisateurs satisfait
								</dt>
								<dd className="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">
									100k+
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}
