// const p: string | null = prompt("test");
// const x : string | number = null
const x: any = 50;
const y: number = 15;

const ar: number[] = [1,8,88,8];
const ar1: any[] = [8,"5"];
const ar1_1: (number | string)[] = ["test",16,18]; 

const ar2: Array<string> = ["sad","qeq"];
const ar3: string[] = ["sad","qeq"];
const ar4: string[][] = [ 
                            ["sad","adasdasd"],
                            ["qeq", "54"] 
                        ];

const ar5: readonly [string,number,number] = ["test", 5, 5 ];




function ff( n1: number, n2:number ) : void {
   console.log(n1*n2) 
}


ff( x , y )