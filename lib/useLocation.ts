export default function useLocation() {
  let path = "";
  try {
    path = globalThis.location.href
  } catch (error) {
    path =  "http://localhost:8080";
  }

  return {path}
}