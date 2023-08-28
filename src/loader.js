export function identity(x) {
  return x;
}

function setAndResolve(img, src, resolve, reject) {
  img.onload = () => {
    resolve(img);
    img.onload = null;
  };
  img.onerror = (e) => {
    reject(e);
    img.onerror = null;
  };
  img.setAttribute("crossorigin", "anonymous");
  img.src = src;
}

export function getLoader(resource) {
  const type = typeof resource;

  if (type === "string") {
    return loadUrl;
  }

  if (resource instanceof Image) {
    return identity;
  }

  return loadFile;
}

export function load(resource) {
  const loader = getLoader(resource);
  return loader(resource);
}

export function loadUrl(url) {
  const img = new Image();
  return new Promise((resolve, reject) => {
    setAndResolve(img, url, resolve, reject);
  });
}

export function loadFile(file) {
  const img = new Image();
  return new Promise((resolve, reject) => {
    setAndResolve(img, URL.createObjectURL(file), resolve, reject);
  });
}
