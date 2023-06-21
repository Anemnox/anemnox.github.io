import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';0

type ArrowProps = {
	onClick?: Function
};

const ArrowButton = (props: ArrowProps): JSX.Element => {
	const click = props.onClick ? props.onClick : () => {};

	return (
		<div
			className='group cursor-pointer relative mx-auto h-[6vw] w-[6vw] max-w-[6vh] max-h-[6vh] rounded-full animate-bounce hover:h-[7vw] hover:w-[7vw] hover:translate-y-[-25%] hover:animate-none'
			onClick={click as MouseEventHandler<HTMLDivElement>}
		>
			<div
				className="absolute bg-emerald-500 left-[46%] w-[8%] h-[0%] group-hover:animate-draw-arrow"
			>
				
			</div>
			<div
				className="rotate-45 mx-auto h-0 w-0 p-[20%] border-4 border-emerald-500 border-l-transparent border-t-transparent"
			>
			</div>
		</div>
	)
};

export default ArrowButton;
