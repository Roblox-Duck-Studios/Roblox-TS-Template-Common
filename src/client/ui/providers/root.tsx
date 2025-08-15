import type { PropsWithChildren } from "@rbxts/react";
import React from "@rbxts/react";

import { ScaleProvider } from "./scale";

export function RootProvider({ children }: PropsWithChildren): React.ReactNode {
	return <ScaleProvider>{children}</ScaleProvider>;
}
