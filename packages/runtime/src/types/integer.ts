import {INumeric, NumericBase} from "./_numeric";

export class Integer extends NumericBase {
  private value: number;

  public constructor() {
    super();

    this.value = 0;
  }

  public set(value: INumeric | number) {
    if (typeof value === "number") {
      this.value = value;
    } else {
      this.value = value.get();
    }
    return this;
  }

  public clear(): void {
    this.value = 0;
  }

  public get(): number {
    return this.value;
  }

  protected new(): this {
    return new Integer() as this;
  }
}