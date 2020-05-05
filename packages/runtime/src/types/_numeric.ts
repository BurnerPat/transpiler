export interface INumeric {
  set(value: INumeric | number): void;

  get(): number;

  clear(): void;

  add(value: INumeric | number): INumeric;

  subtract(value: INumeric | number): INumeric;

  multiply(value: INumeric | number): INumeric;

  divide(value: INumeric | number): INumeric;
}

export abstract class NumericBase implements INumeric {
  protected static asNumber(value: INumeric | number): number {
    if (typeof value === "number") {
      return value;
    } else {
      return value.get();
    }
  }

  public add(value: INumeric | number): INumeric {
    return this.apply(value, (x, y) => x + y);
  }

  abstract clear(): void;

  public divide(value: INumeric | number): INumeric {
    return this.apply(value, (x, y) => x / y);
  }

  abstract get(): number;

  public multiply(value: INumeric | number): INumeric {
    return this.apply(value, (x, y) => x * y);
  }

  abstract set(value: INumeric | number): void;

  public subtract(value: INumeric | number): INumeric {
    return this.apply(value, (x, y) => x - y);
  }

  protected abstract new(): this;

  protected apply(value: INumeric | number, fn: (x: number, y: number) => number): INumeric {
    const ret = this.new();
    ret.set(fn(NumericBase.asNumber(value), this.get()));
    return ret;
  }
}