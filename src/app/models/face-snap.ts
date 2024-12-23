export class FaceSnap {
  location?: string;

  constructor(
    public title: string,
    public description: string,
    public createdAt: Date,
    public snap: number,
    public url: string
  ) {

  }

  addSnap() {
    this.snap++;
  }

  removeSnap() {
    this.snap--;
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
