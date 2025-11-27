import { useContext } from "@rbxts/react";
import type { ScalerApi } from "@rbxts/ui-scaler";

import { ScalerContext } from "../contexts/scale";

export function useScale(): ScalerApi {
	const context = useContext(ScalerContext);
	assert(
		// eslint-disable-next-line ts/strict-boolean-expressions -- we want to check for null/undefined as we hacked the internals
		context,
		"ScalerContext not found. Did you call it outside of ScalerContext? Try wrapping around RootProvider or ScaleProvider",
	);
	return context;
}
