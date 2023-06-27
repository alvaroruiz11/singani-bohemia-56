

export const getYears = ( yearStart: number ): number[] => {

  const years: number[] = [];
  const yearEnd = new Date().getFullYear();


  for (let i = yearStart; i <= yearEnd; i++) {
      years.push( i );
  }

  return years;

}
