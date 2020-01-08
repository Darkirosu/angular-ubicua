export class User {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly password: string,
        public readonly job: string,
        public readonly surname: string,
        public readonly age: number,
        public readonly admin: boolean,
        public readonly username: string,


    ) {}

}
