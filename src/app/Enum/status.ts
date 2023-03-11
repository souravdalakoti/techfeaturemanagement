export class status{
    public static get New (): number{
      return 1;
    }
    public static get Pending (): number {
      return 2;
    }
    public static get Approved (): number {
      return 3;
    }
    public static get Declined (): number {
      return 4;
    }
  }
