export interface ProjectConfigFile {
  order:number,
  angular: any;
  nx: any;
  tsconfig: any;
  tsconfigProd: any;
  workspace?: any;
  [key:string]: any;
  symlink:Array<any>;
}