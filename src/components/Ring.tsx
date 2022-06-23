import React, { MouseEventHandler } from "react";

export default function Ring({
	isHovering,
	onMouseEnter,
	onMouseLeave,
}: {
	isHovering: boolean;
	onMouseEnter: MouseEventHandler;
	onMouseLeave: MouseEventHandler;
}) {
	if (isHovering) {
		return (
			<div
				className="mt-2 mb-5 border-4 rounded-full w-80 h-80 shadow-yellow-200 shadow-2xl bg-yellow-200 border-yellow-200 transition-all"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			></div>
		);
	} else
		return (
			<div
				className="mt-2 mb-5 border-4 border-yellow-300 rounded-full w-80 h-80 transition-all"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			></div>
		);
}
