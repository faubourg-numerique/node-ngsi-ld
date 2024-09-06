export class Entity {
    private data: any = {
        id: "",
        type: ""
    };

    constructor(data: any) {
        Object.assign(this.data, data);
    }

    getId(): string {
        return this.data.id;
    }

    getType(): string {
        return this.data.type;
    }

    setId(id: string) {
        this.data.id = id;
    }

    setType(type: string) {
        this.data.type = type;
    }

    isProperty(name: string) {
        return this.data[name]?.type === "Property";
    }

    isRelationship(name: string) {
        return this.data[name]?.type === "Relationship";
    }

    isGeoProperty(name: string) {
        return this.data[name]?.type === "GeoProperty";
    }

    getProperty(name: string) {
        return this.isProperty(name) ? this.data[name].value : null;
    }

    getRelationship(name: string) {
        return this.isRelationship(name) ? this.data[name].object : null;
    }

    getGeoProperty(name: string) {
        return this.isGeoProperty(name) ? this.data[name].value : null;
    }

    toObject() {
        return this.data;
    }
}
