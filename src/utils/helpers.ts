import { drop } from "lodash";
import { DEFAULT_ITEM_PER_PAGE } from "./constants";
import { Vector2d } from "konva/lib/types";

export function isJson(str: string): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


export function getPaginatedItems(items: any[], page: number, pageSize?: number) {
    var pg = page || 1,
        pgSize = pageSize || DEFAULT_ITEM_PER_PAGE,
        offset = (pg - 1) * pgSize,
        pagedItems = drop(items, offset).slice(0, pgSize);
    return {
        page: pg,
        pageSize: pgSize,
        total: items.length,
        totalPage: Math.ceil(items.length / pgSize),
        data: pagedItems
    };
}

export const getIconLink = (index: number) => {
    return `/icon/icon_${index}.png`
}



export const vectorDistance = (a: Vector2d | undefined | null, b: Vector2d | undefined | null) => {
    if (!a || !b) return 0
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
}