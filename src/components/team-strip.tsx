function Strip() {
	return (
		<div className="bg-default-blue w-screen h-10 p-2 m-0 align-middle overflow-hidden">
			<div className="flex animate-marquee whitespace-nowrap">
				{/* İçeriği iki kez tekrarlayarak kesintisiz bir geçiş sağlıyoruz */}
				{[...Array(20)].map((_, index) => (
					<div key={index} className="flex items-center gap-6 mx-6">
						<img
							src="svg/white-gear.svg"
							alt="white-gear"
							className="my-1"
						/>
						<p className="text-white font-bold text-4x">
							SHACSHUCA ROBOTICS
						</p>
					</div>
				))}
				{[...Array(20)].map((_, index) => (
					<div
						key={index + 20}
						className="flex items-center gap-6 mx-6">
						<img
							src="svg/white-gear.svg"
							alt="white-gear"
							className="my-1"
						/>
						<p className="text-white font-bold text-4x">
							SHACSHUCA ROBOTICS
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Strip;
