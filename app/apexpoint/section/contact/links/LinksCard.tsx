import React, { FunctionComponent, ReactElement } from 'react';
import ArrowRightIcon from '../icons/ArrowRightIcon';

export type ContactCardsProps = {
	Icon: ReactElement;
	title: string;
	subtitle: string;
	link: string;
	linkText: string;
};

const ContactCards: FunctionComponent<ContactCardsProps> = ({
	Icon,
	title,
	subtitle,
	link,
	linkText,
}) => {
	return (
		<div className="flex min-w-[220px] flex-col justify-center items-center gap-4 p-3 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] rounded-lg bg-white group">
			{Icon}
			<div className="flex flex-col justify-center items-center">
				<h3 className="text-base font-medium">{title}</h3>
				<span className="text-xs font-light">{subtitle}</span>
			</div>
			<a
				href={link}
				className="flex items-center justify-center text-sm duration-300 ease-in group-hover:translate-x-1 gap-1"
				target="_blank"
				rel="noopener noreferrer">
				<span>{linkText}</span>
				<ArrowRightIcon />
			</a>
		</div>
	);
};

export default ContactCards;
