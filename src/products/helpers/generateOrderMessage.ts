

export const generateOrderMessage = ( phoneNumber: string, message: string ): string => {
  const encodedMessage: string = encodeURIComponent( message );
  const url = `https://api.whatsapp.com/send?phone=${ phoneNumber }&text=${ encodedMessage }`;
  return url;
}
