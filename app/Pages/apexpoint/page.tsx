import React, { FunctionComponent } from 'react';
import { Poppins } from 'next/font/google';
import Contact from './section/contact/Contact';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
});

export interface pageProps {
	//no props
}

const page: FunctionComponent<pageProps> = ({}) => {
	return (
		<main className={poppins.className}>
			{/* Nav bar */}
			{/* Home */}
			{/* Products */}
			{/* Sellers Banner */}
			<Contact />
			{/* Footer */}
		</main>
	);
};

export default page;
