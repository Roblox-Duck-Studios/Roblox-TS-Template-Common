import type { PropsWithChildren, ReactNode } from "@rbxts/react";
import React from "@rbxts/react";
import { useScaler } from "@rbxts/ui-scaler";

import { ScalerContext } from "../contexts/scale";

/** @ignore */
export function ScaleProvider({ children }: PropsWithChildren): ReactNode {
	return (
		<ScalerContext.Provider value={useScaler(new Vector2(1920, 1080))}>
			{children}
		</ScalerContext.Provider>
	);
}
