@Component("slerpData")
export class SlerpData {
    originRot: Quaternion = Quaternion.Euler(0, 90, 0)
    targetRot: Quaternion = Quaternion.Euler(0, 0, 0)
    fraction: number = 0
}

export function distance(pos1: Vector3, pos2: Vector3): number {
    const a = pos1.x - pos2.x
    const b = pos1.z - pos2.z
    return a * a + b * b
}