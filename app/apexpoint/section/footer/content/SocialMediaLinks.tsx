import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const IconClassName = 'hover:scale-110';

const socialMediaData = [
	{
		icon: <FaFacebook size={23} className={IconClassName} />,
		link: 'https://www.facebook.com/chlorelief',
	},
	{
		icon: <FaInstagram size={23} className={IconClassName} />,
		link: 'https://www.instagram.com/chlorelief/?img_index=1',
	},
	{
		icon: <FaXTwitter size={23} className={IconClassName} />,
		link: 'https://twitter.com/chlorelief',
	},
	{
		icon: <FaLinkedin size={23} className={IconClassName} />,
		link: 'https://www.linkedin.com/in/apexpoint-pharmaceutical-and-medical-supplies-manufacturing-a66524202/',
	},
	{
		icon: <FaYoutube size={23} className={IconClassName} />,
		link: 'https://www.youtube.com/',
	},
];

const SocialMediaLinks = () => {
	return (
		<ul className="flex gap-5">
			{socialMediaData.map((item, index) => (
				<li key={index}>
					<a href={item.link} target="_blank" rel="noopener noreferrer">
						{item.icon}
					</a>
				</li>
			))}
		</ul>
	);
};

export default SocialMediaLinks;
