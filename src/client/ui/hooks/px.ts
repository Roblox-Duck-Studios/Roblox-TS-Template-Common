import type UIScaler from "@rbxts/ui-scaler";

import { useScale } from "./scale";

/**
 * Hook that provides pixel conversion functionality.
 *
 * @returns The usePx function from the scale context.
 * @warn please use `ScalerContext` to make this work
 */
// eslint-disable-next-line @cspell/spellchecker -- author of this library messed up the name
export function usePx(): UIScaler.СalculatorApi {
	return useScale().usePx();
}
