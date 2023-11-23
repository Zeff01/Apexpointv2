import React, { FunctionComponent } from 'react';
import ContactForm from './form/Form';
import Links from './links/Links';

export type ContactProps = {
	//no props
};

const Contact: FunctionComponent<ContactProps> = ({}) => {
	return (
		<section className="flex flex-col py-16 gap-8 items-center">
			<h2 className="font-semibold text-[40px]">Contact Us</h2>
			<div className="flex flex-col min-[800px]:flex-row-reverse md:gap-8 gap-y-4">
				<ContactForm />
				<Links />
			</div>
		</section>
	);
};

export default Contact;
