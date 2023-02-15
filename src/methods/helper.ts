export function paramsToObject(entries: IterableIterator<[string, string]>) {
    const result : { [x:string]:string[]} = {tasks:[]};
    for(const [key, value] of entries) { 
      result[key] = value.split(",");
    }
    return result;
  }
