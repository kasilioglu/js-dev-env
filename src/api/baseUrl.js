export default function getBaseUrl(){
  // we use this to redirect api calls to mock api server rather than production server
  const inDevelopment = window.location.hostname === 'localhost';
  return inDevelopment ? "http://localhost:3001/" : "/";
}
