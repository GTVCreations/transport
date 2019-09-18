export interface Bus {
    id: string,
    trip: boolean,
    verified: number,
    reviewerPending: number,
    reviewerSelected: number,
    available: number,
    currentUserSelected: number,
    route: any,
    seats: any
}
