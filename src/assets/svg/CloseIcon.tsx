import * as React from 'react';

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width={13}
			height={12}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M11.606 1l-9.9 9.9M1.707 1l9.9 9.9'
				stroke='#5A5A7D'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export default CloseIcon;
