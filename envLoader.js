/*
 * This function reads the environment of which the properties will
 * be used, on the run.
 *
 * In order to switch environment, you need to include in the same directory
 * an env.json file with the following content:
 *
 *  {
 *    "env": ["mod"/"web"/...etc]
 *  }
 */

export async function loadConfig() {
  const res = await fetch(chrome.runtime.getURL("env.json"));
  return res.json();
}
