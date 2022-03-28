export interface UserResult {
    id?:          number;
    username?:       string;
    name?:         string;
    password?:     string;
    roles?:        Role[];
}

export interface Role {
    id?:  number;
    name?: string;
}