import * as React from 'react';

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'
        stroke='#302E80'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        clipRule='evenodd'
        d='M12 11a4 4 0 100-8 4 4 0 000 8z'
        stroke='#302E80'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default UserIcon;
