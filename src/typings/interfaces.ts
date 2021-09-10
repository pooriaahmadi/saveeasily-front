import { UserState } from "./enums";
export type setState = (value: any) => any;
export type SaveType = {
	content: string;
	id: number;
	media: string | null;
	title: string | null;
};
export interface HeaderItemInputs {
	className: string;
	to: string;
	children: any;
}
export interface HeaderInputs {
	userState: UserState;
	userObject: any;
	redirectUri: string;
}
export interface DashboardReturnInterface {
	backend: string;
	loginUser: (result: { [key: string]: any }) => Promise<void>;
}

export interface DashboardInputs {
	userGuilds: Array<any>;
	token: string | null;
	redirectToLogin: any;
	backend: string;
	userObject: any;
}
export interface ServersInputs {
	userGuilds: Array<any>;
	token: string | null;
	backend: string;
	userObject: any;
}

export interface ServerInputs {
	icon: string;
	id: string;
	isIn: boolean;
	name: string;
	owner: boolean;
	permissions: number;
}

export interface MenuInputs {
	avatar: string;
	username: string;
	discriminator: string;
	usedCommands: number;
	databaseId: number;
	vip: { id: number; start: string; end: string };
}

export interface UserDashboardInputs extends DashboardInputs {
	id: string;
}
export interface ServerDashboardInputs extends DashboardInputs {
	id: string;
}
export interface SavesInputs {
	userObject: any;
	backend: string;
	userGuilds: Array<any>;
}
export interface SaveViewInputs extends SaveType {
	close: any;
}
