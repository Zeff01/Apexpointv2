import React, { FunctionComponent, ReactElement } from 'react';
import LinksCard from './LinksCard';
import LocationIcon from '../icons/LocationIcon';
import MailIcon from '../icons/MailIcon';
import MobilePhoneIcon from '../icons/MobilePhoneIcon';
import LandlinePhoneIcon from '../icons/LandlinePhoneIcon';

type TLinksData = {
	Icon: ReactElement;
	title: string;
	subtitle: string;
	link: string;
	linkText: string;
};

export const linksData: TLinksData[] = [
	{
		Icon: <LocationIcon />,
		title: 'Location',
		subtitle: 'Quezon City',
		link: 'https://www.waze.com/live-map/directions/apexpoint-pharmaceutical-and-medical-supplies-manufacturing-e.-rodriguez-sr.-ave-295-4th-floor-m-quezon-city?to=place.w.79298706.793118134.17565687',
		linkText: 'Street view',
	},
	{
		Icon: <MailIcon />,
		title: 'Email',
		subtitle: 'apexpointph@gmail.com',
		link: 'mailto:apexpointph@gmail.com',
		linkText: 'Message Us',
	},
	{
		Icon: <MobilePhoneIcon />,
		title: 'Phone',
		subtitle: '+63 995 577 6733',
		link: 'tel:+639955776733',
		linkText: 'Call Us',
	},
	{
		Icon: <LandlinePhoneIcon />,
		title: 'Phone',
		subtitle: '7341-4276',
		link: 'tel:7341-4276',
		linkText: 'Call Us',
	},
];

export type ContactLinksProps = {
	//no props
};

const ContactLinks: FunctionComponent<ContactLinksProps> = ({}) => {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 content-center items-center justify-center mb-8">
			{linksData.map(({ Icon, title, subtitle, link, linkText }, index) => (
				<LinksCard
					Icon={Icon}
					title={title}
					subtitle={subtitle}
					link={link}
					linkText={linkText}
					key={index}
				/>
			))}
		</div>
	);
};

export default ContactLinks;
