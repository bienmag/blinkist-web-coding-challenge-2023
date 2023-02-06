import "./styles.css";
import { v4 as uuidv4 } from "uuid";

import { trackPageview, trackEvent } from "./analytics-api.js";
import { setCookie, getCookie } from "./cookie";



/**
 *  So basically to determine a winning variation
 * the trackPageview function and trackEvent function
 * should get the sessionId and name of the variant shown 
 * to the user as it would be enough to see the conversion. 
 */

if (!getCookie('sessionId'))
{
  setCookie('sessionId', uuidv4());
  const testVariation = Math.random() < 0.5
  setCookie('abTestVersion', testVariation ? 'test' : 'control')
}

let showVariation = false
const cookieValue = getCookie('abTestVersion')
if (cookieValue === 'test')
{
  showVariation = true
}

/** 
 * Given the current structure, only the load
 * event will work.
 * 
 * In a more complex SPA internal navigation 
 * will not trigger load. In that case we'll
 * use complex router that uses the History API
 * and then the `popstate` event would be used.
 * 
 */

window.addEventListener('load', () =>
{
  setup()
  
  const uuid = getCookie('sessionId')
  const variant = getCookie('abTestVersion')
  const url = window.location.href
  trackPageview(
    JSON.stringify({ uuid, variant, url })
  )
})

function setup() {
  const control = document.getElementById('control')
  const test = document.getElementById('test')
  const link = document.getElementById('button')

  if (showVariation)
  {
 test.classList.add('show')
  } else
  {
    control.classList.add('show')
  }

  link.addEventListener('click', function (event) {
    event.preventDefault();

    const uuid = getCookie('sessionId')
    const variant = getCookie('abTestVersion')
    const url = window.location.href
    const eventName = 'sign up'

    trackEvent(JSON.stringify({
      uuid, 
      variant, 
      eventName, 
      url
    }))
  });
}
