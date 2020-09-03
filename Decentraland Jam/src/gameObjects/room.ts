export class room extends Entity
{
    constructor(model: GLTFShape, pos: Vector3, audioClip: AudioClip)
    {
        super();
        engine.addEntity(this);
        this.addComponent(model);
        this.addComponent(new Transform({
            position: pos
        }));

        this.addComponent(new AudioSource(audioClip));
    }
}