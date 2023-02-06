export function getCookie (name)
{
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length === 2)
  {
    return parts.pop().split(';').shift();
  }
}

/**
 * cookies that would expire in 2 weeks 
 */
export function setCookie (name, value)
{
  const date = new Date();
  date.setTime(date.getTime() + (14 * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";

}
