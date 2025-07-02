

export const getYears = ( yearStart: number ): number[] => {

  const years: number[] = [];
  const yearEnd = new Date().getFullYear();


  for (let i = yearEnd; i >= yearStart; i--) {
      years.push( i );
  }

  return years;

}
