
export interface user{
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface login{
    identifier: string;
    password: string;
}

export interface auth{
    jwt: string;
    user: user;
}
