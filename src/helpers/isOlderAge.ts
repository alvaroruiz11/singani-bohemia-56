

export const isOlderAge = ( yearBirth: number ):Promise<boolean> => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearBirth;
    return new Promise((resolve, reject) => {
        if( age >= 18 ){
            resolve( true );
        }else {
            reject( false );
        }
    })
}
