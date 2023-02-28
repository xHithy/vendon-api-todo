// resultCount: Amount of results per page
// totalResults: Total amount of results
export const fetchPageCount = (totalResults:number, resultCount:number) => {
   // Result count can be null if the filter is set as 'All results'
   if (resultCount) return totalResults / resultCount;

   return 0;
}