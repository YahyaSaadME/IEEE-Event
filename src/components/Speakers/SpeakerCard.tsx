import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

interface SpeakerCardProps {
	name: string;
	desc: string;
	img?: string;
	github?: string;
	linkedin?: string;
	x?: string;
}

export default function SpeakerCard(props: SpeakerCardProps) {
	const { name, desc, img, github, linkedin, x } = props;

	return (
		<div className="w-full aspect-[3/4] text-white/90 flex flex-col items-center px-4 py-8">
			<img
				src={img || "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png"}
				alt={img || "default_user"}
				className="w-2/3 aspect-square rounded-full overflow-hidden object-cover object-center"
			/>
			<h2 className="font-medium text-2xl mt-8 text-center">{name}</h2>
			<p className="text-xl mt-2 text-center min-h-[3em]">{desc}</p>
			<div className="mt-4 text-[32px] flex flex-row gap-x-4 items-center">
				{x && <a href={x}><FaXTwitter /></a>}
				{linkedin && <a href={linkedin}><FaLinkedin /></a>}
				{github && <a href={github}><FaGithub /></a>}
			</div>
		</div>
	);
}
