export interface teamIn {
    id?: string,
    name: number,
    shortName?: string,
    flagUrl: string,
    goalsScored?: number,
    goalsReceive?: number,
}

export interface teamMembersIn{
    id?: string,
    name: string,
    lastName: string,
    birth?: string,
    age: string,
    nationality?: string,
    rol: string, 
    teamId: string,
}

export interface playerMembersIn extends teamMembersIn{
    pictUrl: string,
    titular: boolean | undefined,
    numberShirt: string
}