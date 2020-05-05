import {INumeric, NumericBase} from "./_numeric";

export class Packed extends NumericBase {
  private value: number;

  // @ts-ignore
  private readonly length: number;
  // @ts-ignore
  private readonly decimals: number;

  public constructor(input?: { length?: number, decimals?: number }) {
    super();

    this.value = 0;

    this.length = 666;
    if (input?.length) {
      this.length = input.length;
    }

    this.decimals = 666;
    if (input?.decimals) {
      this.decimals = input.decimals;
    }
  }

  public set(value: INumeric | number) {
    if (typeof value === "number") {
      this.value = value;
    } else {
      this.value = value.get();
    }
  }

  public clear(): void {
    this.value = 0;
  }

  public get(): number {
    return this.value;
  }

  protected new(): this {
    return new Packed() as this;
  }
}