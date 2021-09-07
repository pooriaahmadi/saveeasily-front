import { UserState } from "./enums";
export type setState = (value: any) => any;
export interface HeaderItemInputs {
	className: string;
	to: string;
	children: any;
}
export interface HeaderInputs {
	userState: UserState;
}
export interface DashboardReturnInterface {
	backend: string;
	setUserState: setState;
	setUserObject: setState;
}
