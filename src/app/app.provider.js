export class AppProvider {
    constructor() {
        this.name = `default`;
    }

    setName(name) {
        this.name = name;
    }

    $get() {
        return {
            greeting: () => console.log(`Hi ${this.name}`)
        };
    }
}