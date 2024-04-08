export function lerp(y1: number, y2: number, t: number){
    return y1 + t * (y2 - y1)
}