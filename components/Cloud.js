export function Cloud() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-screen-2xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
					<div>
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Toute vos démarches sur une seule plateforme
						</h2>
						<p className="mt-3 max-w-3xl text-lg text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
							egestas tempus tellus etiam sed. Quam a scelerisque amet
							ullamcorper eu enim et fermentum, augue.
						</p>
						<div className="mt-8 sm:flex">
							<div className="rounded-md shadow">
								<a
									href="#"
									className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
								>
									Créer un compte
								</a>
							</div>
							<div className="mt-3 sm:mt-0 sm:ml-3">
								<a
									href="#"
									className="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
								>
									Nous contacter
								</a>
							</div>
						</div>
					</div>
					<div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
						<div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
							<img
								className="max-h-36"
								src="./assets/assurance.png"
								alt="Assurance maladie"
							/>
						</div>
						<div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
							<img className="max-h-36" src="./assets/ants.png" alt="ANTS" />
						</div>
						<div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
							<img className="max-h-36" src="./assets/caf.jpeg" alt="Caf" />
						</div>
						<div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
							<img
								className="max-h-36"
								src="./assets/impots.png"
								alt="Laravel"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
