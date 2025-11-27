import { createContext } from "@rbxts/react";
import type { ScalerApi } from "@rbxts/ui-scaler";

// eslint-disable-next-line ts/no-non-null-assertion -- we know this will be provided by a provider higher in the tree
export const ScalerContext = createContext<ScalerApi>(undefined!);

ScalerContext.displayName = "ScalerContext";
