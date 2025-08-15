import { createContext } from "@rbxts/react";
import type { ScalerApi } from "@rbxts/ui-scaler";

/** @ignore */
export const ScalerContext = createContext<ScalerApi>(undefined!);
