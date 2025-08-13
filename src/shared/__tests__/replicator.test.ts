import type { World } from "@rbxts/jecs";
import { ChildOf, pair, Wildcard, world } from "@rbxts/jecs";
import { afterEach, beforeEach, describe, expect, it, jest } from "@rbxts/jest-globals";
import {
    type Client,
    create_client,
    create_server,
    Networked,
    Pair, type Server
} from "@rbxts/replecs";
import { Trove } from "@rbxts/trove";

describe("replicator verification", () => {
    let clientWorld: World;
    let serverWorld: World;
    let clientReplicator: Client;
    let serverReplicator: Server;
    let mockPlayer: Player;
    const trove = new Trove();

    beforeEach(() => {
        clientWorld = world();
        serverWorld = world();
        clientReplicator = create_client(clientWorld);
        serverReplicator = create_server(serverWorld);
        mockPlayer = { PlayerId: math.random(1, 10000) } as unknown as Player;
        trove.add(clientReplicator);
        trove.add(serverReplicator);
    });

    afterEach(() => {
        trove.clean();
    });

    // it("should get_full and apply_full", () => {
    //     serverReplicator.init();
    //     clientReplicator.init();

    //     serverReplicator.mark_player_ready(mockPlayer);

    //     for (const _ of $range(1, 10)) {
    //         const entity = serverWorld.entity();
    //         serverWorld.add(entity, Networked);
    //         serverWorld.add(entity, pair(reliable, ct.TestTag));
    //         serverWorld.add(entity, ct.TestTag);
    //     }

    //     const [buf, variant] = serverReplicator.get_full(mockPlayer);

    //     clientReplicator.apply_full(buf, variant);

    //     const spyServerQuery = jest.fn();
    //     const spyClientQuery = jest.fn();
    //     for (const _ of serverWorld.query(ct.TestTag)) spyServerQuery();

    //     for (const _ of clientWorld.query(ct.TestTag)) spyClientQuery();

    //     expect(spyServerQuery).toHaveBeenCalledTimes(10);
    //     expect(spyClientQuery).toHaveBeenCalledTimes(10);
    // });

    it("should replicate pair", () => {
        const targetEntityServer = serverWorld.entity();

        serverReplicator.init();
        clientReplicator.init();

        serverReplicator.mark_player_ready(mockPlayer);

        for (const _ of $range(1, 10)) {
            const entity = serverWorld.entity();
            serverWorld.add(entity, Networked);
            serverWorld.add(entity, pair(Pair, ChildOf));
            serverWorld.add(entity, pair(ChildOf, targetEntityServer));
        }

        const [buf, variant] = serverReplicator.get_full(mockPlayer);

        clientReplicator.apply_full(buf, variant);

        const spyServerQuery = jest.fn();
        const spyClientQuery = jest.fn();
        for (const _ of serverWorld.query(pair(ChildOf, Wildcard))) spyServerQuery();

        for (const _ of clientWorld.query(pair(ChildOf, Wildcard))) spyClientQuery();

        expect(spyServerQuery).toHaveBeenCalledTimes(10);
        expect(spyClientQuery).toHaveBeenCalledTimes(10);
    });
});
