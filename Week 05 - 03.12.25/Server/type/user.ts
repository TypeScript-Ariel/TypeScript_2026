
type emailType = `${string}@${string}`

export interface User {
    name: string;
    lastName: string;
    email: emailType;
    password: string;
    userName: string;

}