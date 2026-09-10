import type { CoffeeShop } from "../types/coffee";

const coffeeShops: CoffeeShop[] = [
    {
        id: "1",
        name: "Parakarta Coffee Roasters",
        description:
            "A coffee roastery and slow bar/experience bar located in the Kemang area, South Jakarta. This place is known as one of the top destinations for manual brew coffee lovers and those seeking an intimate and peaceful coffee-drinking atmosphere.",
        location:
            "Jl. Kemang Timur Dalam No.9 Unit E, RT.4/RW.3, Bangka, Kec. Mampang Prapatan, Jakarta Selatan",
    },
    {
        id: "2",
        name: "Coffee of Things",
        description:
            "Coffee of Things is a hidden-gem slow bar and micro-roastery located on a cozy house terrace in Tebet, South Jakarta. It is run by a passionate retired barista affectionately known as Om Acoy.",
        location:
            "Jl. Tebet Barat Dalam IX No.19, RT.3/RW.6, Tebet Barat, Kec. Tebet, Kota Jakarta Selatan",
    },
];

export const coffeeService = {
    getShops: (): CoffeeShop[] => coffeeShops,
    createShop: (shop: Omit<CoffeeShop, "id">) => {
        const newShop: CoffeeShop = {
            ...shop,
            id: crypto.randomUUID(),
        };
        coffeeShops.push(newShop);
        return newShop;
    },
    updateShop: (id: string, updates: Partial<Omit<CoffeeShop, "id">>) => {
        const index = coffeeShops.findIndex((shop) => shop.id === id);
        if (index === -1) {
            throw new Error("Coffee shop not found");
        }
        const updatedShop = {
            ...coffeeShops[index],
            ...updates,
        };
        coffeeShops[index] = updatedShop;
        return coffeeShops[index];
    },
    deleteShop: (id: string) => {
        const index = coffeeShops.findIndex((shop) => shop.id === id);
        if (index === -1) {
            throw new Error("Coffee shop not found");
        }
        const deletedShop = coffeeShops[index];
        coffeeShops.splice(index, 1);
        return deletedShop;
    },
};
