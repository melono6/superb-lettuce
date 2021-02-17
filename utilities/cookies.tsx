
export function setCookie({ cookieName, value, expiryDays = 0, includeSubdomains = false } : {cookieName: string, value: any, expiryDays?: number, includeSubdomains?: boolean}) {
  if (typeof document !== 'undefined') {
    let expiryString = '';

    if (expiryDays > 0) {
      const exdate = new Date();
      exdate.setDate(exdate.getDate() + expiryDays);
      expiryString = `;path=/; expires=${exdate.toUTCString()}`;
    }

    const encodedValue = encodeURIComponent(value);
    const cookieValue = `${encodedValue}${expiryString}`;

    const stripWWW = document.location.hostname.replace('www.', '');
    const addSubdomains = includeSubdomains ? `;domain=${stripWWW}` : '';

    document.cookie = `${cookieName}=${cookieValue}${addSubdomains}`;
    return cookieValue;
  }

  throw new Error('Document must be defined to set cookie');
}

export function getCookie(cookieName: string) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const cookieData = document.cookie.split(';');

    let getCookieName;
    let getCookieValue;

    if (cookieData.length > 0) {
      for (let i = 0; i < cookieData.length; i += 1) {
        getCookieName = cookieData[i].substr(0, cookieData[i].indexOf('='));
        getCookieValue = cookieData[i].substr(cookieData[i].indexOf('=') + 1);
        getCookieName = getCookieName.replace(/^\s+|\s+$/g, '');
        if (getCookieName === cookieName) {
          return decodeURIComponent(getCookieValue);
        }
      }
      return null;
    }
    return null;
  }

  throw new Error('Document & window must be defined to get cookie');
}

export function eraseCookie(cookieName: string) {
  if (typeof window !== 'undefined') {
    setCookie({ cookieName, value: '' });
    return true;
  }

  throw new Error('Window must be defined to erase cookie');
}
