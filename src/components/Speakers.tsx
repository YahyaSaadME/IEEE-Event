import SpeakerCard from "./Speakers/SpeakerCard";


function Speakers() {
	return (
		<div className="bg-transparent" id="speakers">
			<div className="w-full max-w-7xl mx-auto flex flex-col px-4 xl:px-0 pb-20 max-md:pb-12 items-center">
				<h1 className="text-center font-display text-5xl max-md:text-4xl tracking-wider pt-20 max-md:pt-12 pb-8 ">
					Speakers
				</h1>
				<div className="grid grid-cols-1 max-w-md max-xl:grid-cols-1 max-lg:grid-cols-1 max-sm:grid-cols-1 gap-4">
					<SpeakerCard
						name="Muthukumaran R"
						desc="Muthukumaran R is a Machine Learning researcher and Python programmer with nine years of experience at NASA's IMPACT, focusing on GIS and NLP projects. He is currently pursuing a Ph.D. at the University of Alabama in Huntsville, specializing in deep unsupervised and self-supervised learning models."
						img="https://media.licdn.com/dms/image/v2/C4D03AQEzb8mpRBgkrQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1618255517414?e=2147483647&v=beta&t=FsEkSebu7Vx1qvXc9a9OiojOn67mi0k657darmqkFDU"
						linkedin="https://www.linkedin.com/in/muthukumaran-ramasubramanian"
						github="https://github.com/muthukumaranR"
						x="https://x.com/"
					/>
				</div> 
					 {/* <h1 className=' text-center text-3xl'>
						To be revealed soon!
					</h1> */}
			</div>
		</div>
	);
}

export default Speakers;
