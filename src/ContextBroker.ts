import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { Entity } from "./Entity";

export class ContextBroker {
    private client: AxiosInstance;
    private contextBrokerMaxLimit: number;

    constructor({ contextBrokerUrl, contextBrokerMaxLimit, contextUrl } : { contextBrokerUrl: string, contextBrokerMaxLimit: number, contextUrl: string }) {
        this.client = axios.create({
            baseURL: `${contextBrokerUrl}/ngsi-ld/v1`,
            headers: {
                Link: `<${contextUrl}>; rel="http://www.w3.org/ns/json-ld#context"; type="application/ld+json"`
            }
        });
        this.contextBrokerMaxLimit = contextBrokerMaxLimit;
    }

    async findEntity(id: string) {
        const response = await this.client.get(`/entities/${encodeURIComponent(id)}`);
        return new Entity(response.data);
    }

    async findEntities({ type, query }: { type?: string, query?: string }) {
        const config: AxiosRequestConfig = {
            params: {
                type: type ?? undefined,
                q: query ?? undefined,
                limit: this.contextBrokerMaxLimit,
                offset: 0
            }
        };
        const entities: Entity[] = [];
        while (true) {
            const response = await this.client.get("/entities", config);
            entities.push(...response.data.map((entity: any) => new Entity(entity)));

            if (response.data.length && response.data.length === this.contextBrokerMaxLimit) {
                config.params.offset += response.data.length;
                continue;
            }

            break;
        }

        return entities;
    }

    async insertEntity(entity: Entity) {
        await this.client.post("/entities", entity.toObject());
    }

    async updateEntity(entity: Entity) {
        await this.client.put(`/entities/${encodeURIComponent(entity.getId())}`, entity.toObject());
    }

    async deleteEntity(entity: Entity) {
        await this.client.delete(`/entities/${encodeURIComponent(entity.getId())}`);
    }
}
